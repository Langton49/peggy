import { createClient } from "@supabase/supabase-js";

class BackendInterface {
    async signup(email, password, fname, lname, student) {
        throw new Error("Not implemented");
    }

    async login(email, password) {
        throw new Error("Not implemented");
    }

    async createTask(taskTitle, taskDesc, priority, recurring) {
        throw new Error("Not implemented");
    }
}

class SupabaseInterface extends BackendInterface {
    constructor() {
        super();
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
        this.supabase = createClient(supabaseUrl, supabaseKey);
    }

    async signup(email, password, fname, lname, student) {
        const { data, error } = await this.supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) {
            return { success: false, message: error.message }
        }

        const { data: profileData, error: profileError } = await this.supabase.from('user_table')
            .insert([
                {
                    user_id: data.user.id,
                    fname: fname,
                    lname: lname,
                    student: student,
                },
            ]);

        if (profileError) {
            return { success: false, message: profileError.message }
        }

        return { success: true };
    }


    async login(email, password) {
        const { data, error } = await this.supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            return { success: false, message: error.message }
        };
        return { success: true };
    }

    async createTask(taskTitle, taskDesc, priority, recurring) {
        const { data, error } = await this.supabase.from('tasks')
            .insert([
                {
                    task_title: taskTitle,
                    task_desc: taskDesc,
                    priority: priority,
                    recurring: recurring,
                },
            ]);

        if (error) {
            return { success: false, message: error.message }
        }

        return { success: true };
    }
}

export const supabase = new SupabaseInterface();