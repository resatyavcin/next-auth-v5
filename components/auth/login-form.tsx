"use client"

import * as z from 'zod'
import CardWrapper from "@/components/auth/card-wrapper";

import {useForm} from 'react-hook-form';
import { zodResolver} from "@hookform/resolvers/zod";

import {Input} from "@/components/ui/input";

import {LoginSchema} from '@/schemas'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import FormError from "@/components/form-error";
import FormSuccess from "@/components/form-success";

const LoginForm = () => {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        console.log(values);
    }

    return (
        <CardWrapper
            headerLabel="Welcome Back"
            backButtonHref="/auth/register"
            backButtonLabel="Don't have an account?"
            showSocial
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit((data, event)=>{
                    onSubmit(data);
                })} className="space-y-6">
                    <div className="space-y-4">

                        <FormField
                            name="email"
                            control={form.control}
                            render={({field})=>(
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="jhon.doe@example.com" type="email"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            name="password"
                            control={form.control}
                            render={({field})=>(
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="******" type="password"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError message="merhahnaqoıef"/>
                    <FormSuccess message="merhahnaqoıef"/>
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default LoginForm