"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ShoppingCart,
  Globe,
  FileText,
  Star,
  CheckCircle,
  Users,
  Shield,
  ArrowRight,
  Target,
  Award,
  Quote,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import CTA from '@/components/CTA';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StatItem {
  value: string;
  label: string;
  color: string;
}

export default function Home() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const amazonServices: string[] = [
    "Complete Amazon account setup and management",
    "Listing creation, optimization, and A+ content",
    "Order management, dispute resolution, FBA logistics",
    "Seasonal and flash promotions (Diwali, Black Friday, etc.)",
    "PPC and ad campaign management for all ad types",
    "Ongoing monitoring, optimization, and competitor research",
    "Detailed sales reports and tailored strategy insights",
    "Assistance with selling on Amazon USA, Germany, UK, and Walmart"
  ];

  const digitalServices: string[] = [
    "Website design and development (any industry, any size)",
    "Mobile app creation and launch",
    "SEO and local search (Google My Business, rankings)",
    "Social media ads (Meta, Google) and post designs",
    "UX/UI and full-service graphic design"
  ];

  const businessServices: string[] = [
    "GST registration",
    "FSSAI and USDA Organic certification, NPOP certification",
    "VPOB (Virtual Place of Business) setup",
    "Trademark management",
    "Assistance with selling on Blinkit, Flipkart, Jiomart, and Zepto",
    "Guidance on payment solutions and payment gateways",
    "Support with export documentation and freight setup"
  ];

  const whyChooseUs: ServiceItem[] = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Direct Founder Involvement",
      description: "Benefit from Vimal's personal oversight and battle-tested strategies that delivered real success."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team Coverage",
      description: "Our specialists handle every aspect of digital growth, from market entry to advanced scaling."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "60-Day Guarantee",
      description: "See results or get your investment back—we stand by our commitment to your success."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Exclusive Client Focus",
      description: "We welcome just a few new clients each cycle, ensuring quality attention and dedicated support."
    }
  ];

  const stats: StatItem[] = [
    { value: "7+", label: "Years on Amazon", color: "text-blue-600" },
    { value: "10+", label: "Years Digital Marketing", color: "text-emerald-600" },
    { value: "100%", label: "Success Rate", color: "text-orange-600" }
  ];

  const serviceCards = [
    {
      title: "Amazon Growth Services",
      description: "Complete Amazon ecosystem management",
      icon: <ShoppingCart className="h-8 w-8 text-white" />,
      services: amazonServices,
      colors: {
        gradient: "from-orange-500 to-red-500",
        border: "border-orange-200 hover:border-orange-300",
        bg: "from-orange-50 to-red-50",
        check: "text-orange-600",
        text: "text-orange-700"
      }
    },
    {
      title: "Digital Marketing & Brand Building",
      description: "Complete digital presence solutions",
      icon: <Globe className="h-8 w-8 text-white" />,
      services: digitalServices,
      colors: {
        gradient: "from-blue-500 to-indigo-500",
        border: "border-blue-200 hover:border-blue-300",
        bg: "from-blue-50 to-indigo-50",
        check: "text-blue-600",
        text: "text-blue-700"
      }
    },
    {
      title: "Business & Compliance Support",
      description: "Legal and operational foundations",
      icon: <FileText className="h-8 w-8 text-white" />,
      services: businessServices,
      colors: {
        gradient: "from-emerald-500 to-green-500",
        border: "border-emerald-200 hover:border-emerald-300",
        bg: "from-emerald-50 to-green-50",
        check: "text-emerald-600",
        text: "text-emerald-700"
      }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/newlogo.png"
                alt="ImproveBizz Logo"
                width={160}
                height={160}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-700 shadow-lg hover:shadow-emerald-200">
              Book Free Audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {/* Hero Content */}
            <div className="text-center space-y-8">
              <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 px-3 py-1 text-sm font-medium">
                ✨ Welcome to ImproveBizz Digi Marketing LLP
              </Badge>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Transform Your Business
                  </span>
                  <br />
                  <span className="text-slate-800">Into an Amazon Bestseller</span>
                </h1>

                <p className="text-xl text-slate-600 leading-relaxed mx-auto max-w-2xl">
                  Hi, I&apos;m <span className="font-semibold text-blue-600">Vimal Vadher</span>. After 7 years on Amazon and 10+ years in digital marketing, I built Indigenous Honey from scratch into a top-ranked Amazon product. Now I&apos;m here to help you achieve the same success.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-blue-200">
                  Book Your Free Business Audit
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-slate-300 hover:border-blue-500 hover:bg-blue-50 px-8 py-4 rounded-full transition-all duration-300">
                  Learn More About Our Services
                </Button>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-center space-x-8 pt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image with Overlay Card */}
            <div className="relative max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Digital marketing success story"
                  width={1200}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/60"></div>

                {/* Success Story Card */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <Card className="bg-white/95 backdrop-blur-sm max-w-md shadow-xl border-0">
                    <CardContent className="p-8 text-center space-y-4">
                      <div className="flex items-center justify-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                        ))}
                      </div>

                      <div>
                        <h3 className="font-bold text-slate-800 text-lg">Amazon Bestseller</h3>
                        <p className="text-sm text-slate-600">Indigenous Honey Success Story</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-slate-600">Sales Growth</span>
                          <span className="text-sm font-bold text-emerald-600">+500%</span>
                        </div>
                        <div className="w-full bg-emerald-100 rounded-full h-3 overflow-hidden">
                          <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-full rounded-full w-[85%] transition-all duration-1000"></div>
                        </div>
                      </div>

                      <blockquote className="text-xs text-slate-500 italic">
                        &quot;Built from scratch using proven strategies now available to you&quot;
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Started Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <header className="space-y-4">
                <h2 className="text-4xl font-bold text-slate-800">Why I Started ImproveBizz</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></div>
              </header>

              <div className="space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  I&apos;ve seen firsthand how challenging it is to juggle account setup, ad campaigns, order headaches, and digital marketing—especially when you&apos;re working with scattered freelancers or agencies.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  So, I decided to build a place where <span className="font-semibold text-blue-600">every service you need for online growth comes from a single, proven team.</span>
                </p>

                <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border-blue-100">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                        <Target className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 text-lg">One Team, All Solutions</h3>
                        <p className="text-slate-600">No more juggling multiple vendors</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaboration and digital marketing"
                  width={800}
                  height={400}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50" >
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">
              What We Offer—<span className="text-blue-600">All Under One Roof</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A holistic suite of services designed to cover every aspect of your online presence and sales.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Amazon Growth Services */}
            <Card
              className={`group cursor-pointer transition-all duration-500 hover:scale-105 border-2 ${hoveredService === 0 ? 'border-orange-300 shadow-2xl shadow-orange-100' : 'border-orange-200 hover:border-orange-300'
                } bg-gradient-to-br from-orange-50 to-red-50`}
              onMouseEnter={() => setHoveredService(0)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl shadow-lg">
                    <ShoppingCart className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-slate-800">Amazon Growth Services</CardTitle>
                    <CardDescription className="text-orange-700">Complete Amazon ecosystem management</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {amazonServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{service}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Digital Marketing */}
            <Card
              className={`group cursor-pointer transition-all duration-500 hover:scale-105 border-2 ${hoveredService === 1 ? 'border-blue-300 shadow-2xl shadow-blue-100' : 'border-blue-200 hover:border-blue-300'
                } bg-gradient-to-br from-blue-50 to-indigo-50`}
              onMouseEnter={() => setHoveredService(1)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-xl shadow-lg">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-slate-800">Digital Marketing & Brand Building</CardTitle>
                    <CardDescription className="text-blue-700">Complete digital presence solutions</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {digitalServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{service}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Business Support */}
            <Card
              className={`group cursor-pointer transition-all duration-500 hover:scale-105 border-2 ${hoveredService === 2 ? 'border-emerald-300 shadow-2xl shadow-emerald-100' : 'border-emerald-200 hover:border-emerald-300'
                } bg-gradient-to-br from-emerald-50 to-green-50`}
              onMouseEnter={() => setHoveredService(2)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-3 rounded-xl shadow-lg">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-slate-800">Business & Compliance Support</CardTitle>
                    <CardDescription className="text-emerald-700">Legal and operational foundations</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {businessServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{service}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section >

      {/* Founder Quote */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional business leader"
                  width={800}
                  height={400}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8">
                  <Quote className="h-16 w-16 text-white mb-4 fill-current" />
                  <blockquote className="text-xl lg:text-2xl text-white font-medium leading-relaxed mb-6">
                    I&apos;m building ImproveBizz the same way I built my own brand—through tested methods, unmatched dedication, and a focus on real results. My team and I aren&apos;t just service providers; we&apos;re growth partners, committed to making your business another success story.
                  </blockquote>

                  <footer className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">VV</span>
                    </div>
                    <div>
                      <cite className="text-white font-semibold not-italic">Vimal Vadher</cite>
                      <p className="text-blue-200 text-sm">Founder, ImproveBizz Digi Marketing LLP</p>
                    </div>
                  </footer>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <header className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">Why Work With Us?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the difference of working with a proven team that delivers results.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className="text-center border-2 border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-slate-50 to-blue-50"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 rounded-2xl w-fit mx-auto shadow-lg">
                    <div className="text-white">{item.icon}</div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Guarantee Section */}
          <Card className="mt-16 bg-gradient-to-r from-emerald-500 to-green-500 border-0 text-white">
            <CardContent className="p-8 text-center">
              <div className="max-w-2xl mx-auto space-y-4">
                <h3 className="text-2xl font-bold">60-Day Money-Back Guarantee</h3>
                <p className="text-emerald-100 leading-relaxed">
                  We&apos;re so confident in our ability to deliver results that we offer a full 60-day guarantee. See measurable improvements in your business or get your investment back—no questions asked.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <CTA />
    </div>
  );
}