export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      admin_audit_log: {
        Row: {
          action: string
          admin_user_id: string
          created_at: string
          id: string
          new_values: Json | null
          old_values: Json | null
          record_id: string | null
          table_name: string | null
        }
        Insert: {
          action: string
          admin_user_id: string
          created_at?: string
          id?: string
          new_values?: Json | null
          old_values?: Json | null
          record_id?: string | null
          table_name?: string | null
        }
        Update: {
          action?: string
          admin_user_id?: string
          created_at?: string
          id?: string
          new_values?: Json | null
          old_values?: Json | null
          record_id?: string | null
          table_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "admin_audit_log_admin_user_id_fkey"
            columns: ["admin_user_id"]
            isOneToOne: false
            referencedRelation: "admin_users"
            referencedColumns: ["id"]
          },
        ]
      }
      admin_users: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          role: Database["public"]["Enums"]["admin_role"]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          role?: Database["public"]["Enums"]["admin_role"]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          role?: Database["public"]["Enums"]["admin_role"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      analytics_events: {
        Row: {
          event_name: string
          event_type: string
          id: string
          ip_address: unknown | null
          properties: Json | null
          session_id: string | null
          timestamp: string
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          event_name: string
          event_type: string
          id?: string
          ip_address?: unknown | null
          properties?: Json | null
          session_id?: string | null
          timestamp?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          event_name?: string
          event_type?: string
          id?: string
          ip_address?: unknown | null
          properties?: Json | null
          session_id?: string | null
          timestamp?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      backup_logs: {
        Row: {
          backup_type: string
          checksum: string | null
          completed_at: string | null
          error_message: string | null
          file_path: string | null
          file_size: number | null
          id: string
          started_at: string
          started_by: string | null
          status: string
          tables_included: string[] | null
        }
        Insert: {
          backup_type: string
          checksum?: string | null
          completed_at?: string | null
          error_message?: string | null
          file_path?: string | null
          file_size?: number | null
          id?: string
          started_at?: string
          started_by?: string | null
          status?: string
          tables_included?: string[] | null
        }
        Update: {
          backup_type?: string
          checksum?: string | null
          completed_at?: string | null
          error_message?: string | null
          file_path?: string | null
          file_size?: number | null
          id?: string
          started_at?: string
          started_by?: string | null
          status?: string
          tables_included?: string[] | null
        }
        Relationships: []
      }
      benchmark_profiles: {
        Row: {
          background_info: string | null
          communication_style: string | null
          created_at: string
          created_by: string | null
          description: string | null
          difficulty_level: string
          id: string
          industry: string | null
          is_active: boolean
          name: string
          personality_traits: Json | null
          response_patterns: Json | null
          role: string | null
          updated_at: string
        }
        Insert: {
          background_info?: string | null
          communication_style?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          difficulty_level: string
          id?: string
          industry?: string | null
          is_active?: boolean
          name: string
          personality_traits?: Json | null
          response_patterns?: Json | null
          role?: string | null
          updated_at?: string
        }
        Update: {
          background_info?: string | null
          communication_style?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          difficulty_level?: string
          id?: string
          industry?: string | null
          is_active?: boolean
          name?: string
          personality_traits?: Json | null
          response_patterns?: Json | null
          role?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      email_subscribers: {
        Row: {
          address: string | null
          age: string | null
          email: string
          id: string
          source: string | null
          status: string
          subscribed_at: string
        }
        Insert: {
          address?: string | null
          age?: string | null
          email: string
          id?: string
          source?: string | null
          status?: string
          subscribed_at?: string
        }
        Update: {
          address?: string | null
          age?: string | null
          email?: string
          id?: string
          source?: string | null
          status?: string
          subscribed_at?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          message: string
          priority: string
          scheduled_at: string | null
          sent_at: string | null
          status: string
          target_audience: string
          target_user_ids: string[] | null
          title: string
          type: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          message: string
          priority?: string
          scheduled_at?: string | null
          sent_at?: string | null
          status?: string
          target_audience: string
          target_user_ids?: string[] | null
          title: string
          type: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          message?: string
          priority?: string
          scheduled_at?: string | null
          sent_at?: string | null
          status?: string
          target_audience?: string
          target_user_ids?: string[] | null
          title?: string
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          center_name: string | null
          created_at: string
          full_name: string | null
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          center_name?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          center_name?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      scenarios: {
        Row: {
          category: string
          created_at: string
          created_by: string | null
          description: string | null
          difficulty_level: string
          duration_minutes: number | null
          evaluation_criteria: string[] | null
          id: string
          is_active: boolean
          objectives: string[] | null
          script: string | null
          target_audience: string | null
          title: string
          updated_at: string
        }
        Insert: {
          category: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          difficulty_level: string
          duration_minutes?: number | null
          evaluation_criteria?: string[] | null
          id?: string
          is_active?: boolean
          objectives?: string[] | null
          script?: string | null
          target_audience?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          difficulty_level?: string
          duration_minutes?: number | null
          evaluation_criteria?: string[] | null
          id?: string
          is_active?: boolean
          objectives?: string[] | null
          script?: string | null
          target_audience?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      scheduled_email_reports: {
        Row: {
          created_at: string
          frequency_days: number
          id: string
          is_active: boolean
          last_sent_at: string | null
          next_send_at: string
          recipient_email: string
          report_type: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          frequency_days?: number
          id?: string
          is_active?: boolean
          last_sent_at?: string | null
          next_send_at?: string
          recipient_email: string
          report_type?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          frequency_days?: number
          id?: string
          is_active?: boolean
          last_sent_at?: string | null
          next_send_at?: string
          recipient_email?: string
          report_type?: string
          updated_at?: string
        }
        Relationships: []
      }
      security_alerts: {
        Row: {
          alert_type: string
          created_at: string
          details: Json | null
          id: string
          ip_address: unknown | null
          message: string
          resolved: boolean
          resolved_at: string | null
          resolved_by: string | null
          severity: string
          updated_at: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          alert_type: string
          created_at?: string
          details?: Json | null
          id?: string
          ip_address?: unknown | null
          message: string
          resolved?: boolean
          resolved_at?: string | null
          resolved_by?: string | null
          severity?: string
          updated_at?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          alert_type?: string
          created_at?: string
          details?: Json | null
          id?: string
          ip_address?: unknown | null
          message?: string
          resolved?: boolean
          resolved_at?: string | null
          resolved_by?: string | null
          severity?: string
          updated_at?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_sessions: {
        Row: {
          completed_at: string | null
          duration_minutes: number | null
          feedback: string | null
          id: string
          profile_id: string | null
          scenario_id: string | null
          score: number | null
          session_id: string
          started_at: string
          status: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          duration_minutes?: number | null
          feedback?: string | null
          id?: string
          profile_id?: string | null
          scenario_id?: string | null
          score?: number | null
          session_id: string
          started_at?: string
          status?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          duration_minutes?: number | null
          feedback?: string | null
          id?: string
          profile_id?: string | null
          scenario_id?: string | null
          score?: number | null
          session_id?: string
          started_at?: string
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_sessions_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "benchmark_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_sessions_scenario_id_fkey"
            columns: ["scenario_id"]
            isOneToOne: false
            referencedRelation: "scenarios"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      cleanup_old_security_alerts: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      create_security_alert: {
        Args: {
          p_alert_type: string
          p_severity?: string
          p_message?: string
          p_details?: Json
          p_user_id?: string
          p_ip_address?: unknown
          p_user_agent?: string
        }
        Returns: string
      }
      create_system_backup: {
        Args: { backup_type?: string; tables_to_backup?: string[] }
        Returns: string
      }
      get_current_admin_role: {
        Args: Record<PropertyKey, never>
        Returns: Database["public"]["Enums"]["admin_role"]
      }
      is_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      mask_sensitive_data: {
        Args: { input_text: string; data_type?: string }
        Returns: string
      }
    }
    Enums: {
      admin_role: "super_admin" | "admin" | "moderator"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      admin_role: ["super_admin", "admin", "moderator"],
    },
  },
} as const
