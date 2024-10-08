import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { Textarea } from "@/components/ui/textarea";
import OrderDetails from "./OrderDetails";

const addressFormSchema = z.object({
  name: z.string().nonempty({ message: "Full Name is required" }),
  number: z.string().nonempty({ message: "Phone number is required" }),
  address: z.string().nonempty({ message: "Address is required" }),
  rememberMe: z.boolean(),
});

const AddressForm = () => {
  const form = useForm<z.infer<typeof addressFormSchema>>({
    resolver: zodResolver(addressFormSchema),
    defaultValues: {
      name: "",
      number: "",
      address: "",
      rememberMe: false,
    },
  });

  function onSubmit(values: z.infer<typeof addressFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full lg:w-8/12">
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Full Name" {...field} />
              </FormControl>
              <FormMessage className="text-right" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem className="w-full lg:w-8/12">
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Phone Number" {...field} />
              </FormControl>
              <FormMessage className="text-right" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="w-full lg:w-8/12">
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Textarea placeholder="Address" {...field} />
              </FormControl>
              <FormMessage className="text-right" />
            </FormItem>
          )}
        />

        <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center space-x-0 md:space-x-2 space-y-4 md:space-y-0 w-full lg:w-8/12">
          <div className="md:hidden w-full">
            <OrderDetails />
          </div>

          <FormField
            control={form.control}
            name="rememberMe"
            render={({ field }) => (
              <FormItem className="flex space-x-2">
                <Checkbox
                  className="mt-2.5 border-foreground/75 data-[state=checked]:bg-foreground/75 rounded-md"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />

                <FormLabel className="font-normal text-xs text-wrap">
                  I have read and agree to the{" "}
                  <Link to="terms-condition" className="text-[#37a9fd]">
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link to="privacy-policy" className="text-[#37a9fd]">
                    Privacy Policy
                  </Link>
                </FormLabel>
              </FormItem>
            )}
          />

          <Button size="sm" type="submit" className="w-1/3 bg-gradient-primary">
            Confirm Payment
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddressForm;
