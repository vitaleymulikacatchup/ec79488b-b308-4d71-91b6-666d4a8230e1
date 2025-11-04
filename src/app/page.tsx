"use client"

import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Award, BookOpen, Clock, Coffee, Heart, Mail, MessageSquare, Star, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Brew & Bean"
          logoSrc="https://images.pexels.com/photos/16822611/pexels-photo-16822611.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Premium Coffee Experience"
          description="Discover the perfect blend of exceptional coffee, cozy atmosphere, and friendly service. Every cup tells a story of quality and passion."
          tag="Fresh Daily"
          tagIcon={Coffee}
          imageSrc="https://images.pexels.com/photos/5198144/pexels-photo-5198144.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Intimate cafe setting with a neon sign reading 'All you need is love (and cake)'"
          imagePosition="right"
          buttons={[
            {
              text: "Visit Us Today",
              href: "contact"
            },
            {
              text: "View Menu",
              href: "product"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Coffee Story"
          description="Born from a passion for exceptional coffee, Brew & Bean has been serving the community with carefully crafted beverages and a warm, welcoming atmosphere since our founding."
          tag="Since 2018"
          tagIcon={Heart}
          imageSrc="https://images.pexels.com/photos/17516410/pexels-photo-17516410.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="A detailed shot of aromatic coffee beans spilling from a transparent glass jar onto a surface."
          imagePosition="left"
          bulletPoints={[
            {
              title: "Premium Beans",
              description: "Sourced directly from sustainable farms around the world",
              icon: Coffee
            },
            {
              title: "Expert Craftsmanship",
              description: "Our skilled baristas bring years of experience to every cup",
              icon: Award
            },
            {
              title: "Community Focus",
              description: "A gathering place where neighbors become friends",
              icon: Users
            },
            {
              title: "Fresh Daily",
              description: "Roasted in small batches to ensure peak flavor and quality",
              icon: Clock
            }
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "faq"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Featured Menu Items"
          description="Explore our carefully curated selection of premium coffee drinks and specialty items"
          tag="Popular"
          tagIcon={Star}
          products={[
            {
              id: "1",
              name: "Premium Coffee Beans",
              price: "$18.99",
              imageSrc: "https://images.pexels.com/photos/4829083/pexels-photo-4829083.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Close-up of branded coffee packages with artistic black and white leaf pattern."
            },
            {
              id: "2",
              name: "Signature Espresso",
              price: "$4.25",
              imageSrc: "https://images.pexels.com/photos/34586916/pexels-photo-34586916.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Overhead shot of coffee in an elegant floral-patterned cup on a lace doily, exuding warmth and charm."
            },
            {
              id: "3",
              name: "Artisan Cappuccino",
              price: "$5.75",
              imageSrc: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Close-up of a barista pouring milk to create latte art in a coffee cup."
            },
            {
              id: "4",
              name: "Brewing Equipment",
              price: "$89.99",
              imageSrc: "https://images.pexels.com/photos/6612586/pexels-photo-6612586.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Close-up of a professional espresso machine with frothing pitcher, perfect for coffee lovers."
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real feedback from coffee lovers who make Brew & Bean their daily destination"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Director",
              testimonial: "The best coffee in town! The atmosphere is perfect for both meetings and relaxation. Their baristas really know their craft.",
              imageSrc: "https://images.pexels.com/photos/3796810/pexels-photo-3796810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Smiling African American waitress wearing casual t shirt and apron standing at counter in cozy coffee shop with female customer while serving hot drink and looking at each other"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Software Developer",
              testimonial: "I'm here every morning before work. Consistent quality, friendly service, and the perfect spot to start my day right.",
              imageSrc: "https://images.pexels.com/photos/4012966/pexels-photo-4012966.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Female freelancer using laptop with coffee at home office desk, surrounded by roses and a planner."
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Freelance Writer",
              testimonial: "Brew & Bean has become my second office. Great WiFi, amazing coffee, and a community feel that keeps me coming back.",
              imageSrc: "https://images.pexels.com/photos/4827509/pexels-photo-4827509.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Young adults enjoy a relaxed conversation and coffee in a stylish urban café."
            },
            {
              id: "4",
              name: "David Kim",
              role: "Business Owner",
              testimonial: "Finally found my go-to coffee spot! The attention to detail in every cup and the warm hospitality make this place special.",
              imageSrc: "https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A young man with a beard is working on a laptop at a cozy cafe with warm lighting, holding a coffee cup."
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our coffee shop, services, and policies"
          textPosition="left"
          faqs={[
            {
              id: "1",
              title: "What are your operating hours?",
              content: "We're open Monday through Friday from 6:30 AM to 8:00 PM, and weekends from 7:00 AM to 9:00 PM. Holiday hours may vary."
            },
            {
              id: "2",
              title: "Do you offer dairy-free milk alternatives?",
              content: "Yes! We have oat milk, almond milk, soy milk, and coconut milk available for all our drinks at no extra charge."
            },
            {
              id: "3",
              title: "Can I work from your cafe with my laptop?",
              content: "Absolutely! We welcome remote workers and students. We have free WiFi, plenty of outlets, and comfortable seating areas designed for productivity."
            },
            {
              id: "4",
              title: "Do you sell whole bean coffee for home brewing?",
              content: "Yes, we sell our premium coffee beans by the bag. All our beans are roasted fresh weekly and available for purchase in-store."
            },
            {
              id: "5",
              title: "Do you cater events or offer group orders?",
              content: "We offer catering services for meetings, events, and special occasions. Contact us at least 24 hours in advance to discuss your needs."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Coffee Stories & Tips"
          description="Discover the art and science of coffee through our expert insights and brewing guides"
          tag="Fresh Articles"
          tagIcon={BookOpen}
          blogs={[
            {
              id: "1",
              category: "Brewing Guide",
              title: "The Perfect Pour-Over Technique",
              excerpt: "Master the art of pour-over brewing with our step-by-step guide to extracting the perfect cup every time.",
              imageSrc: "https://images.pexels.com/photos/29619150/pexels-photo-29619150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A V60 pour-over coffee setup with a coffee scale, dripper, and kettle on a wooden counter.",
              authorName: "Jessica Martinez",
              authorAvatar: "https://images.pexels.com/photos/6686438/pexels-photo-6686438.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Coffee Culture",
              title: "Understanding Coffee Origins",
              excerpt: "Explore how geography, climate, and processing methods influence the unique flavors in your favorite coffee beans.",
              imageSrc: "https://images.pexels.com/photos/7125616/pexels-photo-7125616.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Crop unrecognizable horticulturists separating raw coffee beans from chaff over bamboo tray while working in countryside",
              authorName: "Alex Thompson",
              authorAvatar: "https://images.pexels.com/photos/34490272/pexels-photo-34490272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "10 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Join Our Coffee Community"
          description="Get the latest updates on new menu items, events, and brewing tips delivered to your inbox."
          tagIcon={Mail}
          imageSrc="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="A bustling café in Miami with people enjoying a lively atmosphere and stylish interior design."
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive our weekly newsletter. You can unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoSrc="https://images.pexels.com/photos/16822611/pexels-photo-16822611.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          copyrightText="© 2025 | Brew & Bean Coffee Shop"
          columns={[
            {
              title: "Menu",
              items: [
                {
                  label: "Coffee Drinks",
                  href: "product"
                },
                {
                  label: "Food Items",
                  href: "product"
                },
                {
                  label: "Retail Coffee",
                  href: "product"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Coffee Blog",
                  href: "blog"
                },
                {
                  label: "Community",
                  href: "testimonial"
                }
              ]
            },
            {
              title: "Visit",
              items: [
                {
                  label: "Location",
                  href: "contact"
                },
                {
                  label: "Hours",
                  href: "faq"
                },
                {
                  label: "Contact Us",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}