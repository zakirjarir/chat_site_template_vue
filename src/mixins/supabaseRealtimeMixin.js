// src/mixins/supabaseRealtimeMixin.js
import { supabase } from '@/lib/supabase'

export default {
  data() {
    return {
      items: [],
      channel: null,
      loading: false,
      error: null,
    }
  },
  methods: {
    async fetchItems(table) {
      this.loading = true
      const { data, error } = await supabase.from(table).select('*')
      this.loading = false

      if (error) {
        this.error = error.message
      } else {
        this.items = data
      }
    },
    async addItem(table, newItem) {
      const { data, error } = await supabase.from(table).insert([newItem])
      if (error) {
        this.error = error.message
      }
    },
    async updateItem(table, id, updatedData) {
      const { data, error } = await supabase.from(table).update(updatedData).eq('id', id)
      if (error) {
        this.error = error.message
      }
    },
    async deleteItem(table, id) {
      const { error } = await supabase.from(table).delete().eq('id', id)
      if (error) {
        this.error = error.message
      }
    },
    setupRealtime(table) {
      this.channel = supabase
        .channel(`realtime-${table}`)
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table },
          (payload) => {
            console.log('Realtime change:', payload)
            const eventType = payload.eventType

            if (eventType === 'INSERT') {
              this.items.push(payload.new)
            } else if (eventType === 'UPDATE') {
              const index = this.items.findIndex((item) => item.id === payload.new.id)
              if (index !== -1) {
                this.items.splice(index, 1, payload.new)
              }
            } else if (eventType === 'DELETE') {
              this.items = this.items.filter((item) => item.id !== payload.old.id)
            }
          }
        )
        .subscribe()
    },
    unsubscribeRealtime() {
      if (this.channel) {
        supabase.removeChannel(this.channel)
      }
    },
  },
  beforeUnmount() {
    this.unsubscribeRealtime()
  },
}
