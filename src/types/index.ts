import {z} from "zod";

export const modeOptions = [
    { value: 'All' },
    { value: 'Active' },
    { value: 'Completed' },
] as const;

export type Mode = (typeof modeOptions)[number]['value'];

export const todoSchema = z.object({
    text: z.string().nonempty(),
});

export type TodoForm = z.infer<typeof todoSchema>;

export type Todo = {
    id: number;
    text: string;
    completed: boolean;
};
