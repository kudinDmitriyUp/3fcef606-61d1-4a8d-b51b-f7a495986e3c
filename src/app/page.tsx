"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeLargeTitles"
        background="noise"
        cardStyle="subtle-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Our Story",
          id: "about",
        },
        {
          name: "Shop",
          id: "products",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Germi"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Artistry in Every Sip"
      description="Germi brings you handcrafted ceramic cups that transform your daily coffee ritual into an art form. Each piece is uniquely shaped and glazed with care."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-empty-cup-dark_140725-78006.jpg",
          imageAlt: "Artisan Ceramic Cup",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/chocolate-doughnut-with-cup-tea_114579-17391.jpg",
          imageAlt: "Handcrafted Pottery Mug",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/ceramic-pottery-tools-still-life_23-2150197291.jpg",
          imageAlt: "Studio Pottery Detail",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/crop-woman-with-mug-bed_23-2147737676.jpg",
          imageAlt: "Ceramic Texture Close-up",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-enjoying-beverage-morning_23-2147911488.jpg",
          imageAlt: "Minimalist Mug Design",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-white-pumpkins-wooden-box_23-2149741939.jpg",
          imageAlt: "Lifestyle Ceramic Cup",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/tower-porcelain-tea-cups_23-2148193490.jpg",
          imageAlt: "Minimalist Mug Design",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/tools-clay-work-sculpting_23-2149986277.jpg",
          imageAlt: "Ceramic Texture Close-up",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-candy-cup-tea-marble-surface_114579-79763.jpg",
          imageAlt: "Studio Pottery Detail",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/monochromatic-still-life-composition-with-tableware_23-2148869756.jpg",
          imageAlt: "Handcrafted Pottery Mug",
        },
      ]}
      tag="New 2025 Collection"
      buttons={[
        {
          text: "Shop Collection",
          href: "#products",
        },
      ]}
      tagIcon={Sparkles}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/girl-holding-cup-tea-hands_169016-3431.jpg",
          alt: "Customer 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/rustic-white-coffee-mug-design-resource_53876-105916.jpg",
          alt: "Customer 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/rustic-speckled-mug-design-resource_53876-105914.jpg",
          alt: "Customer 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/three-cups-coffee-wooden-board_114579-52730.jpg",
          alt: "Customer 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cup-milk-coffee-with-cinnamon-sticks-orange-slices-high-quality-photo_114579-67849.jpg",
          alt: "Customer 5",
        },
      ]}
      avatarText="Join 5,000+ coffee enthusiasts"
      marqueeItems={[
        {
          type: "text",
          text: "Sustainable Clay",
        },
        {
          type: "text",
          text: "Local Craftsmanship",
        },
        {
          type: "text",
          text: "Lead-Free Glaze",
        },
        {
          type: "text",
          text: "Dishwasher Safe",
        },
        {
          type: "text",
          text: "Heirloom Quality",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Crafted with Purpose"
      description={[
        "Germi was founded on the belief that the vessel you choose changes the experience of the drink. Our mugs are made from earth-derived clay, fired at high temperatures for durability and elegance.",
        "We collaborate with local artisans to ensure every cup has its own distinct personality, making your morning ritual feel truly yours.",
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Classic Stone",
          price: "$28",
          variant: "Earth",
          imageSrc: "http://img.b2bpic.net/free-photo/from-essence-mortar_23-2147809230.jpg",
        },
        {
          id: "p2",
          name: "Matte Forest",
          price: "$32",
          variant: "Dark",
          imageSrc: "http://img.b2bpic.net/free-photo/leaves-near-teapot-cup_23-2147885939.jpg",
        },
        {
          id: "p3",
          name: "Glazed Sky",
          price: "$35",
          variant: "Gloss",
          imageSrc: "http://img.b2bpic.net/free-photo/cup-tea-marble-table-with-cinnamon-books-high-quality-photo_114579-67985.jpg",
        },
        {
          id: "p4",
          name: "Textured Clay",
          price: "$30",
          variant: "Earth",
          imageSrc: "http://img.b2bpic.net/free-photo/female-potter-s-hand-decorating-clay-bowl-with-tool_23-2148155237.jpg",
        },
        {
          id: "p5",
          name: "Minimalist White",
          price: "$26",
          variant: "Simple",
          imageSrc: "http://img.b2bpic.net/free-photo/cozy-autumn-still-life-background-with-beautiful-cup_169016-6308.jpg",
        },
        {
          id: "p6",
          name: "Artisan Gold",
          price: "$40",
          variant: "Luxury",
          imageSrc: "http://img.b2bpic.net/free-photo/putting-marshmallow-tea_23-2148550466.jpg",
        },
      ]}
      title="Our Collection"
      description="Explore our selection of handcrafted ceramic cups."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="The best purchase I've made for my morning routine. The weight and texture of these cups are unmatched."
      rating={5}
      author="Alice Thompson"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/female-potter-working-with-clay-wheel-studio-clay-with-water-splattered-around-potter-wheel_1157-40116.jpg",
          alt: "Alice",
        },
        {
          src: "http://img.b2bpic.net/free-photo/man-enjoying-cup-matcha-tea_23-2150215053.jpg",
          alt: "Ben",
        },
        {
          src: "http://img.b2bpic.net/free-photo/male-sculptor-working-with-clay-studio_23-2149986319.jpg",
          alt: "Charlie",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-woman-working-with-rolling-pin_23-2148878431.jpg",
          alt: "Diana",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-lighting-candle_23-2150168125.jpg",
          alt: "Edward",
        },
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Let's Connect"
      title="Need something special?"
      description="Interested in wholesale or custom orders? Reach out to our design team and we'll help bring your ideas to life."
      buttons={[
        {
          text: "Contact Us",
          href: "mailto:hello@germi.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "All Products",
              href: "#products",
            },
            {
              label: "About Us",
              href: "#about",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Germi"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
