
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name is required' }),
  email: z.string().email({ message: 'Valid email is required' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
  role: z.enum(['player', 'coach'], { required_error: 'Please select a role' }),
  age: z.string().min(1, { message: 'Age is required' }),
  primarySport: z.string().min(1, { message: 'Primary sport is required' }),
  sportIntensity: z.enum(['low', 'moderate', 'high'], { required_error: 'Please select intensity' }),
  diet: z.string().min(1, { message: 'Diet preference is required' }),
});

type FormData = z.infer<typeof formSchema>;

const SignupForm = () => {
  const [step, setStep] = useState<number>(1);
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      role: 'player',
      age: '',
      primarySport: '',
      sportIntensity: 'moderate',
      diet: 'balanced',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast({
      title: "Account created!",
      description: "You have successfully signed up for Zenith Zap.",
    });
    
    // Normally we would redirect to dashboard here
    // navigate('/dashboard');
  };

  const nextStep = async () => {
    const fields = step === 1 
      ? ['fullName', 'email', 'password', 'role'] 
      : ['age', 'primarySport', 'sportIntensity', 'diet'];
    
    const valid = await form.trigger(fields as any);
    if (valid) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const sports = [
    'Basketball', 'Soccer', 'Running', 'Swimming', 'Tennis', 
    'Cycling', 'Weightlifting', 'CrossFit', 'Volleyball', 'Baseball',
    'Football', 'Hockey', 'Yoga', 'Golf', 'Other'
  ];

  const diets = [
    'Balanced', 'Keto', 'Vegan', 'Paleo', 'Mediterranean', 
    'Vegetarian', 'Carnivore', 'Gluten-free', 'Low-carb', 'Other'
  ];

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block relative">
          <div
            className="absolute inset-0 bg-gradient-to-br from-zenith-blue to-zenith-navy flex flex-col justify-end p-8 text-white"
            style={{
              backgroundImage: `url('/athlete-background.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2">Join Zenith Zap</h2>
              <p>Unlock personalized hydration plans tailored to your athletic needs.</p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold mb-1">Create Your Account</h1>
            <p className="text-gray-600">
              {step === 1 
                ? "Tell us about yourself to get started" 
                : "Help us personalize your experience"}
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <div className={`h-2 w-12 rounded-full ${step === 1 ? 'bg-zenith-blue' : 'bg-gray-300'}`}></div>
              <div className={`h-2 w-12 rounded-full ${step === 2 ? 'bg-zenith-blue' : 'bg-gray-300'}`}></div>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email" {...field} />
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
                          <Input type="password" placeholder="Create a password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>I am a:</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex gap-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="player" id="player" />
                              <Label htmlFor="player">Player/Athlete</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="coach" id="coach" />
                              <Label htmlFor="coach">Coach/Trainer</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="button" 
                    onClick={nextStep}
                    className="w-full bg-zenith-blue hover:bg-zenith-blue/90"
                  >
                    Next Step
                  </Button>

                  <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                      Already have an account?{' '}
                      <Link to="/login" className="text-zenith-blue hover:underline">
                        Log In
                      </Link>
                    </p>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Age</FormLabel>
                        <FormControl>
                          <Input type="number" min="13" max="120" placeholder="Enter your age" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="primarySport"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Primary Sport</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your primary sport" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {sports.map((sport) => (
                              <SelectItem key={sport} value={sport.toLowerCase()}>
                                {sport}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="sportIntensity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sport Intensity</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your sport intensity" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="moderate">Moderate</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="diet"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Diet</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your diet" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {diets.map((diet) => (
                              <SelectItem key={diet} value={diet.toLowerCase()}>
                                {diet}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-4">
                    <Button 
                      type="button" 
                      onClick={prevStep}
                      variant="outline"
                      className="w-full"
                    >
                      Back
                    </Button>
                    <Button 
                      type="submit" 
                      className="w-full bg-zenith-blue hover:bg-zenith-blue/90"
                    >
                      Create Account
                    </Button>
                  </div>
                </motion.div>
              )}
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
