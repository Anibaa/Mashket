"use client"

import type React from "react"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import {
  MapPin,
  Wifi,
  Coffee,
  Users,
  Calendar,
  Shield,
  Clock,
  Phone,
  Mail,
  Star,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  CheckCircle,
  ArrowRight,
  Play,
  Quote,
  Globe,
  Zap,
  Award,
  Send,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [newsletterEmail, setNewsletterEmail] = useState("")

  // Refs for scrolling
  const aboutRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const galleryRef = useRef<HTMLElement>(null)
  const pricingRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const testimonials = [
    {
      name: "Ahmed Ben Salem",
      role: "Fondateur, TechStart",
      content:
        "مشكاة a transformé ma façon de travailler. L'environnement est inspirant et la communauté exceptionnelle.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Leila Mansouri",
      role: "Designer Freelance",
      content: "Un espace parfait pour la créativité. J'ai trouvé ici mes meilleurs clients et partenaires.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Mohamed Triki",
      role: "Développeur",
      content: "La connexion internet est excellente et l'ambiance de travail vraiment motivante.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  const galleryImages = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ]

  const stats = [
    { number: "200+", label: "Membres actifs" },
    { number: "50+", label: "Entreprises hébergées" },
    { number: "24/7", label: "Accès disponible" },
    { number: "99%", label: "Satisfaction client" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  // Scroll to section function
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    setIsMenuOpen(false) // Close mobile menu when clicking a link
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Check for hash in URL on load and scroll to that section
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [])

  const nextGalleryImage = () => {
    setCurrentGalleryImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevGalleryImage = () => {
    setCurrentGalleryImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle contact form submission
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    })
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  // Handle newsletter subscription
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate newsletter subscription
    toast({
      title: "Inscription réussie !",
      description: "Vous êtes maintenant inscrit à notre newsletter.",
    })
    setNewsletterEmail("")
  }

  // Handle booking buttons
  const handleBooking = (plan?: string) => {
    toast({
      title: "Réservation initiée",
      description: plan ? `Vous avez sélectionné le plan ${plan}` : "Veuillez remplir le formulaire de réservation",
    })
  }

  // Handle visit scheduling
  const handleScheduleVisit = () => {
    toast({
      title: "Planification de visite",
      description: "Notre équipe vous contactera pour organiser votre visite.",
    })
  }

  // Handle call now button
  const handleCallNow = () => {
    window.location.href = "tel:+21600000000"
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FEA401] via-[#FEC601] to-[#E03616] rounded-xl flex items-center justify-center shadow-lg">
              <Image
                  src="/logo.png"
                  alt="Espace de coworking مشكاة"
                  width={100}
                  height={100}
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">مشكاة</span>
                <p className="text-xs text-gray-500">Coworking Radès</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="text-gray-700 hover:text-[#FEA401] transition-colors font-medium"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection(servicesRef)}
                className="text-gray-700 hover:text-[#FEA401] transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection(galleryRef)}
                className="text-gray-700 hover:text-[#FEA401] transition-colors font-medium"
              >
                Galerie
              </button>
              <button
                onClick={() => scrollToSection(pricingRef)}
                className="text-gray-700 hover:text-[#FEA401] transition-colors font-medium"
              >
                Tarifs
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="text-gray-700 hover:text-[#FEA401] transition-colors font-medium"
              >
                Contact
              </button>
              <Button
                onClick={() => handleBooking()}
                className="bg-gradient-to-r from-[#FEA401] to-[#E03616] hover:from-[#E03616] hover:to-[#FEA401] text-white shadow-lg"
              >
                Réserver maintenant
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection(aboutRef)}
                  className="text-gray-700 hover:text-[#FEA401] transition-colors font-medium"
                >
                  À propos
                </button>
                <button
                  onClick={() => scrollToSection(servicesRef)}
                  className="text-gray-700 hover:text-[#FEA401] transition-colors font-medium"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection(galleryRef)}
                  className="text-gray-700 hover:text-[#FEA401] transition-colors font-medium"
                >
                  Galerie
                </button>
                <button
                  onClick={() => scrollToSection(pricingRef)}
                  className="text-gray-700 hover:text-[#FEA401] transition-colors font-medium"
                >
                  Tarifs
                </button>
                <button
                  onClick={() => scrollToSection(contactRef)}
                  className="text-gray-700 hover:text-[#FEA401] transition-colors font-medium"
                >
                  Contact
                </button>
                <Button
                  onClick={() => handleBooking()}
                  className="bg-gradient-to-r from-[#FEA401] to-[#E03616] text-white w-full"
                >
                  Réserver maintenant
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#FEA401] via-[#FEC601] to-[#E03616] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-[url('/logo.png?height=800&width=1200')] bg-cover bg-center opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-white/20 text-white border-white/30 mb-4">✨ Nouveau à Radès</Badge>
                <h1 className="text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text">
                  مشكاة
                </h1>
                <p className="text-2xl lg:text-3xl mb-4 font-light">Votre espace de coworking à Radès</p>
                <p className="text-lg mb-8 opacity-90 leading-relaxed max-w-lg">
                  Un environnement moderne et inspirant pour entrepreneurs, freelances et équipes innovantes. Découvrez
                  un espace où créativité et productivité se rencontrent dans le cœur de Radès.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() =>
                    toast({
                      title: "Visite virtuelle",
                      description: "La visite virtuelle va démarrer dans quelques instants.",
                    })
                  }
                  className="bg-white text-[#E03616] hover:bg-gray-100 shadow-xl group"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Visite virtuelle
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection(pricingRef)}
                  className="border-2 border-white hover:bg-white hover:text-[#E03616] shadow-xl text-red-500"
                >
                  Découvrir nos offres
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm opacity-90">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Radès, Tunisie</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Ouvert 24/7</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/home.png?height=600&width=700"
                  alt="Espace de coworking مشكاة"
                  width={700}
                  height={600}
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">200+ Membres</p>
                      <p className="text-sm text-gray-600">Communauté active</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#E03616] mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-[#FEA401]/10 text-[#FEA401] border-[#FEA401]/20 mb-4">Pourquoi مشكاة</Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Plus qu'un espace de travail</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              مشكاة est une communauté dynamique qui favorise l'innovation, la collaboration et la croissance
              professionnelle dans un environnement moderne au cœur de Radès.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Wifi,
                title: "Connexion Haut Débit",
                description: "Internet fibre optique ultra-rapide pour une productivité maximale",
                color: "bg-[#FEA401]",
              },
              {
                icon: Users,
                title: "Communauté Active",
                description: "Réseau de professionnels et événements de networking réguliers",
                color: "bg-[#FEC601]",
              },
              {
                icon: Coffee,
                title: "Café & Détente",
                description: "Espace café avec boissons et collations pour vos pauses",
                color: "bg-[#E03616]",
              },
              {
                icon: Shield,
                title: "Sécurité 24/7",
                description: "Accès sécurisé et surveillance pour votre tranquillité d'esprit",
                color: "bg-[#FEA401]",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardHeader>
                  <div
                    className={`w-20 h-20 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-[#E03616] text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Features */}
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Réseau International",
                description: "Connectez-vous avec des entrepreneurs du monde entier",
              },
              {
                icon: Zap,
                title: "Innovation Hub",
                description: "Ateliers et formations pour développer vos compétences",
              },
              {
                icon: Award,
                title: "Excellence Reconnue",
                description: "Élu meilleur espace de coworking de Radès 2024",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#FEA401] to-[#E03616] rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-[#E03616]/10 text-[#E03616] border-[#E03616]/20 mb-4">Nos Services</Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Espaces & Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à tous vos besoins professionnels, du freelance à l'entreprise
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Espace Ouvert",
                description: "Parfait pour le travail collaboratif et le networking",
                image: "/placeholder.svg?height=300&width=400",
                badge: "Populaire",
                badgeColor: "bg-[#FEA401]",
                features: ["Accès 24/7", "WiFi haut débit", "Café illimité", "Imprimante"],
                price: "À partir de 25 DT/jour",
                plan: "Journalier",
              },
              {
                title: "Bureaux Privés",
                description: "Pour les équipes qui ont besoin de confidentialité",
                image: "/placeholder.svg?height=300&width=400",
                badge: "Recommandé",
                badgeColor: "bg-[#FEC601]",
                features: ["2-8 personnes", "Accès sécurisé", "Réservation flexible", "Téléphone fixe"],
                price: "À partir de 400 DT/mois",
                plan: "Mensuel",
              },
              {
                title: "Salles de Réunion",
                description: "Équipées pour vos présentations et visioconférences",
                image: "/placeholder.svg?height=300&width=400",
                badge: "Premium",
                badgeColor: "bg-[#E03616]",
                features: ["4-12 personnes", "Équipement AV", "Tableau interactif", "Catering"],
                price: "À partir de 50 DT/heure",
                plan: "Réunion",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-4 left-4 ${service.badgeColor} text-white shadow-lg`}>
                    {service.badge}
                  </Badge>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-[#E03616] text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-lg font-semibold text-[#E03616] mb-4">{service.price}</p>
                    <Button
                      onClick={() => handleBooking(service.plan)}
                      className="w-full bg-gradient-to-r from-[#FEA401] to-[#E03616] hover:from-[#E03616] hover:to-[#FEA401] text-white"
                    >
                      Réserver maintenant
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} id="gallery" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#FEA401]/10 text-[#FEA401] border-[#FEA401]/20 mb-4">Galerie</Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Découvrez nos espaces</h2>
            <p className="text-xl text-gray-600">Un aperçu de l'environnement moderne et inspirant de مشكاة</p>
          </div>

          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={galleryImages[currentGalleryImage] || "/placeholder.svg"}
                alt={`Espace مشكاة ${currentGalleryImage + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

              <button
                onClick={prevGalleryImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>

              <button
                onClick={nextGalleryImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGalleryImage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentGalleryImage ? "bg-[#FEA401] scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {galleryImages.slice(0, 4).map((image, index) => (
              <div
                key={index}
                className="relative h-32 lg:h-40 rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setCurrentGalleryImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Aperçu ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#E03616]/10 text-[#E03616] border-[#E03616]/20 mb-4">Témoignages</Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Ce que disent nos membres</h2>
            <p className="text-xl text-gray-600">Découvrez pourquoi ils ont choisi مشكاة</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-12">
                <div className="text-center">
                  <Quote className="w-16 h-16 text-[#FEA401] mx-auto mb-8" />
                  <p className="text-2xl text-gray-700 mb-8 leading-relaxed italic">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <Image
                      src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</p>
                      <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? "bg-[#FEA401] scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} id="pricing" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#FEC601]/10 text-[#FEC601] border-[#FEC601]/20 mb-4">Tarifs</Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Choisissez votre formule</h2>
            <p className="text-xl text-gray-600">Des prix transparents et flexibles pour tous les besoins</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Journalier",
                price: "10",
                period: "jour",
                description: "Parfait pour tester l'espace",
                features: [
                  "Accès espace ouvert",
                  "WiFi haut débit",
                  "Café & thé inclus",
                  "Accès cuisine",
                  "Support technique",
                ],
                buttonText: "Réserver",
                buttonClass: "bg-[#FEA401] hover:bg-[#E03616]",
                popular: false,
              },
              {
                name: "Mensuel",
                price: "200",
                period: "mois",
                description: "Le choix des professionnels",
                features: [
                  "Accès 24/7",
                  "Bureau dédié",
                  "5h salle de réunion incluses",
                  "Domiciliation d'entreprise",
                  "Casier personnel",
                  "Événements networking",
                  "Support prioritaire",
                ],
                buttonText: "Choisir ce plan",
                buttonClass: "bg-[#FEC601] hover:bg-[#E03616]",
                popular: true,
              },
              {
                name: "Équipe",
                price: "900",
                period: "mois",
                description: "Pour les équipes en croissance",
                features: [
                  "Bureau privé (4-6 personnes)",
                  "Accès 24/7",
                  "20h salle de réunion incluses",
                  "Services de secrétariat",
                  "Domiciliation premium",
                  "Parking réservé",
                  "Manager dédié",
                ],
                buttonText: "Nous contacter",
                buttonClass: "bg-[#E03616] hover:bg-[#FEA401]",
                popular: false,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative border-2 hover:shadow-2xl transition-all duration-300 ${
                  plan.popular ? "border-[#FEC601] scale-105" : "border-gray-200 hover:border-[#FEA401]"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FEC601] text-white px-6 py-2 shadow-lg">
                    ⭐ Recommandé
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl text-[#E03616] mb-2">{plan.name}</CardTitle>
                  <div className="text-5xl font-bold text-gray-900 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-600 font-normal">DT/{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => handleBooking(plan.name)}
                    className={`w-full ${plan.buttonClass} text-white shadow-lg hover:shadow-xl transition-all`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Besoin d'une solution sur mesure ?</p>
            <Button
              onClick={() => scrollToSection(contactRef)}
              variant="outline"
              className="border-[#E03616] text-[#E03616] hover:bg-[#E03616] hover:text-white"
            >
              Contactez-nous pour un devis personnalisé
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-[#FEA401] to-[#E03616]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Restez connecté avec مشكاة</h2>
          <p className="text-xl text-white/90 mb-8">
            Recevez nos actualités, événements et offres spéciales directement dans votre boîte mail
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Votre adresse email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
              className="flex-1 bg-white border-0 text-gray-900 placeholder-gray-500"
            />
            <Button type="submit" className="bg-white text-[#E03616] hover:bg-gray-100 shadow-lg">
              <Send className="w-4 h-4 mr-2" />
              S'abonner
            </Button>
          </form>
          <p className="text-sm text-white/70 mt-4">Pas de spam, désabonnement en un clic</p>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#E03616]/10 text-[#E03616] border-[#E03616]/20 mb-4">Contact</Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Visitez مشكاة</h2>
            <p className="text-xl text-gray-600">Découvrez notre espace et rejoignez notre communauté</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations pratiques</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Adresse",
                      content: "Avenue Habib Bourguiba, Radès 2040, Tunisie",
                      color: "bg-[#FEA401]",
                    },
                    {
                      icon: Clock,
                      title: "Horaires",
                      content: "Lun-Ven: 8h-20h | Sam: 9h-18h\nAccès 24/7 pour les membres",
                      color: "bg-[#FEC601]",
                    },
                    {
                      icon: Phone,
                      title: "Téléphone",
                      content: "+216 XX XXX XXX",
                      color: "bg-[#E03616]",
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      content: "info@mashkaat.tn",
                      color: "bg-[#FEA401]",
                    },
                  ].map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div
                        className={`w-14 h-14 ${info.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <info.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg mb-1">{info.title}</h4>
                        <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={handleScheduleVisit}
                  className="bg-gradient-to-r from-[#FEA401] to-[#E03616] hover:from-[#E03616] hover:to-[#FEA401] text-white shadow-lg flex-1"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Planifier une visite
                </Button>
                <Button
                  size="lg"
                  onClick={handleCallNow}
                  variant="outline"
                  className="border-2 border-[#E03616] text-[#E03616] hover:bg-[#E03616] hover:text-white flex-1"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler maintenant
                </Button>
              </div>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-[#E03616]">Envoyez-nous un message</CardTitle>
                <CardDescription>Nous vous répondrons dans les plus brefs délais</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                      <Input
                        name="firstName"
                        placeholder="Votre prénom"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                      <Input
                        name="lastName"
                        placeholder="Votre nom"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="+216 XX XXX XXX"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea
                      name="message"
                      placeholder="Parlez-nous de votre projet ou de vos besoins..."
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#FEA401] to-[#E03616] hover:from-[#E03616] hover:to-[#FEA401] text-white shadow-lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FEA401] via-[#FEC601] to-[#E03616] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">م</span>
                </div>
                <div>
                  <span className="text-2xl font-bold">مشكاة</span>
                  <p className="text-sm text-gray-400">Coworking Radès</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Votre espace de coworking moderne à Radès. Rejoignez une communauté dynamique d'entrepreneurs, de
                créatifs et d'innovateurs dans un environnement inspirant.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    toast({
                      title: "Réseaux sociaux",
                      description: "Suivez-nous sur Facebook",
                    })
                  }}
                  className="w-10 h-10 bg-gray-800 hover:bg-[#FEA401] rounded-lg flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    toast({
                      title: "Réseaux sociaux",
                      description: "Suivez-nous sur Instagram",
                    })
                  }}
                  className="w-10 h-10 bg-gray-800 hover:bg-[#FEA401] rounded-lg flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    toast({
                      title: "Réseaux sociaux",
                      description: "Suivez-nous sur LinkedIn",
                    })
                  }}
                  className="w-10 h-10 bg-gray-800 hover:bg-[#FEA401] rounded-lg flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg">Navigation</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <button onClick={() => scrollToSection(aboutRef)} className="hover:text-[#FEA401] transition-colors">
                    À propos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(servicesRef)}
                    className="hover:text-[#FEA401] transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(galleryRef)}
                    className="hover:text-[#FEA401] transition-colors"
                  >
                    Galerie
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(pricingRef)}
                    className="hover:text-[#FEA401] transition-colors"
                  >
                    Tarifs
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(contactRef)}
                    className="hover:text-[#FEA401] transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-[#FEA401]" />
                  <a href="tel:+21600000000" className="hover:text-[#FEA401] transition-colors">
                    +216 XX XXX XXX
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-[#FEA401]" />
                  <a href="mailto:info@mashkaat.tn" className="hover:text-[#FEA401] transition-colors">
                    info@mashkaat.tn
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mr-3 text-[#FEA401] mt-1 flex-shrink-0" />
                  <a
                    href="https://maps.google.com/?q=Radès,Tunisie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FEA401] transition-colors"
                  >
                    Avenue Habib Bourguiba
                    <br />
                    Radès 2040, Tunisie
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© 2024 مشكاة Coworking. Tous droits réservés.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <button
                  onClick={() =>
                    toast({
                      title: "Mentions légales",
                      description: "Page des mentions légales en cours de développement.",
                    })
                  }
                  className="text-gray-400 hover:text-[#FEA401] text-sm transition-colors"
                >
                  Mentions légales
                </button>
                <button
                  onClick={() =>
                    toast({
                      title: "Politique de confidentialité",
                      description: "Page de politique de confidentialité en cours de développement.",
                    })
                  }
                  className="text-gray-400 hover:text-[#FEA401] text-sm transition-colors"
                >
                  Politique de confidentialité
                </button>
                <button
                  onClick={() =>
                    toast({
                      title: "CGU",
                      description: "Page des conditions générales d'utilisation en cours de développement.",
                    })
                  }
                  className="text-gray-400 hover:text-[#FEA401] text-sm transition-colors"
                >
                  CGU
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
