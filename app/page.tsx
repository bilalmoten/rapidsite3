import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import { Box } from "lucide-react";
import { Form } from "@/components/ui/form";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToastProvider, ToastViewport } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default async function Index() {
  // const form = useForm();
  // const { toast } = useToast();

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   toast({
  //     title: "Message Sent",
  //     description: "Your message has been sent successfully.",
  //   });
  // };
  return (
    <div className="p-6">
      {/* Hero Section */}
      <section className="text-center py-10">
        <h1 className="text-4xl mb-4">
          Create Stunning Websites with AI in Minutes
        </h1>
        <p className="text-lg mb-6">
          Our AI-powered builder makes website creation effortless and
          intuitive.
        </p>
        <Button variant={"outline"} size="lg">
          Start Building for Free
        </Button>
      </section>

      {/* Features Section */}
      <section className="py-10">
        <h2 className="text-3xl mb-4 text-center">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <h3 className="text-xl">Chat based website creation</h3>
            </CardHeader>
            <CardContent>
              <p>
                Create an amazing first draft with the help of AI by just
                chatting with an AI powered Website Mnager
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h3 className="text-xl">Make Changes to text, images and more</h3>
            </CardHeader>
            <CardContent>
              <p>
                Make changes to the website in real time with the our intuitive
                editor
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h3 className="text-xl">Request Major Changes With AI</h3>
            </CardHeader>
            <CardContent>
              <p>
                Dont like a page, or a section or an image, just select it and
                tell what changes you need, and see AI rebuild your website with
                changes that you wanted
              </p>
            </CardContent>
          </Card>
          {/* Repeat for other features */}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-10 bg-gray-100">
        <h2 className="text-3xl mb-4 text-center">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <h3 className="text-xl">
                Step 1: Chat with your AI Website Manager
              </h3>
            </CardHeader>
            <CardContent>
              <p>
                Get a personal AI powered website manager that will take you
                through your website creation process. From understanding your
                business, design preferences and website goals, to suggeting
                layouts, sections and pages, this website manager does it all
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h3 className="text-xl">Step 2: Request AI for major changes</h3>
            </CardHeader>
            <CardContent>
              <p>
                Dont like a page, or a section or an image, just select it and
                tell what changes you need, and see AI rebuild your website with
                changes that you wanted
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h3 className="text-xl">
                Step 3: Make changes to text, images and more and publish your
                website in minutes
              </h3>
            </CardHeader>
            <CardContent>
              <p>
                Make changes to the website in real time with the our intuitive
                editor, and lead your website to perfection, while getting help
                from your AI website Mnager every step of the way.e.
              </p>
              <p className=" pt-2">
                when ready, click publish and see your website go live in a
                minute.
              </p>
            </CardContent>
          </Card>
          {/* Repeat for other steps */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10">
        <h2 className="text-3xl mb-4 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card>
            <CardContent>
              <p>"This AI builder made creating my website a breeze!"</p>
              <h4 className="text-lg">- Happy Customer</h4>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p>"I was able to launch my website in just a few hours!"</p>
              <h4 className="text-lg">- Another Happy Customer</h4>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p>"I love how easy it is to make changes to my website!"</p>
              <h4 className="text-lg">- Yet Another Happy Customer</h4>
            </CardContent>
          </Card>

          {/* Repeat for other testimonials */}
        </div>
      </section>

      {/* Examples Section */}
      {/* <section className="py-10 bg-gray-100">
        <h2 className="text-3xl mb-4 text-center">Examples</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card>
            <CardContent>
              <h3 className="text-xl">Business Website</h3>
            </CardContent>
          </Card>
          
        </div>
      </section> */}

      {/* Pricing Section */}
      <section className="py-10">
        <h2 className="text-3xl mb-4 text-center">Pricing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <h3 className="text-xl">Free Plan</h3>
            </CardHeader>
            <CardContent>
              <p>$0/month</p>
              <p>Basic features to get you started.</p>
              <Button>Choose Plan</Button>
            </CardContent>
          </Card>
          {/* Repeat for other pricing tiers */}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 bg-gray-100 px-8">
        <h2 className="text-3xl mb-4 text-center">FAQ</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it responsive?</AccordionTrigger>
            <AccordionContent>
              Yes. It works on all devices and screen sizes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it customizable?</AccordionTrigger>
            <AccordionContent>
              Yes. You can customize it to fit your needs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* About Us Section */}
      <section className="py-10">
        <h2 className="text-3xl mb-4 text-center">About Us</h2>
        <p className="text-center">
          We are a team of passionate developers and designers...
        </p>
      </section>

      {/* Contact Section */}
      {/* <section className="py-10 bg-gray-100">
        <h2 className="text-3xl mb-4 text-center">Contact Us</h2>
        <Form className="space-y-4">
          <div>
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              placeholder="Your Name"
              required
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="email">Your Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="message">Your Message</Label>
            <Input
              id="message"
              placeholder="Your Message"
              required
              className="w-full"
            />
          </div>
          <Button type="submit">Send Message</Button>
        </Form>
        <p className="text-center mt-4">Email: contact@aiwebsitebuilder.com</p>
      </section> */}

      {/* Footer */}
      <footer className="py-4 bg-black text-white text-center">
        <p>&copy; 2024 AI Website Builder. All rights reserved.</p>
      </footer>

      {/* Toast Notifications */}
      <ToastProvider>
        <ToastViewport />
      </ToastProvider>
    </div>
  );
}
