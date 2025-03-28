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

    async createTask(taskTitle, taskDesc, day, f_time, t_time, priority, recurring, recurrance_start, recurrance_end) {
        if (recurring && !recurrance_start) {
            return {
                success: false,
                message: 'Recurrence dates are required for recurring tasks'
            };
        }

        const taskData = {
            task_title: taskTitle,
            task_desc: taskDesc,
            priority: priority,
            recurring: recurring,
            task_day: day,
            from_time: f_time,
            to_time: t_time,
        }

        console.log(taskData);

        if (recurring) {
            taskData.recurrance_start_date = recurrance_start;
            taskData.recurrance_end_date = recurrance_end;
        }
        const { data, error } = await this.supabase.from('tasks')
            .insert([taskData]);

        if (error) {
            return { success: false, message: error.message }
        }

        return { success: true };
    }
}

export const supabase = new SupabaseInterface();