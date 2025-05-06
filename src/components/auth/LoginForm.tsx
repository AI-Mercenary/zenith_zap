
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
  email: z.string().email({ message: 'Valid email is required' }),
  password: z.string().min(1, { message: 'Password is required' }),
  rememberMe: z.boolean().optional(),
});

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      toast({
        title: "Login successful!",
        description: "Redirecting to your dashboard...",
      });
      setIsLoading(false);
      
      // Normally we would redirect to dashboard here
      // navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block relative">
          <div
            className="absolute inset-0 bg-gradient-to-br from-zenith-blue to-zenith-navy flex flex-col justify-end p-8 text-white"
            style={{
              backgroundImage: `url('/athlete-running.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2">Welcome Back!</h2>
              <p>Log in to access your personalized hydration dashboard.</p>
            </div>
          </div>
        </div>

        <div className="p-8 flex flex-col justify-center">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold mb-1">Log In to Your Account</h1>
            <p className="text-gray-600">
              Enter your credentials to access your dashboard
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter your password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-between">
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal cursor-pointer">
                        Remember me
                      </FormLabel>
                    </FormItem>
                  )}
                />

                <Link to="/forgot-password" className="text-sm text-zenith-blue hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-zenith-blue hover:bg-zenith-blue/90"
              >
                {isLoading ? 'Logging in...' : 'Log In'}
              </Button>

              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                  Don't have an account yet?{' '}
                  <Link to="/signup" className="text-zenith-blue hover:underline">
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
