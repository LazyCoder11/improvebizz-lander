import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Calendar, ArrowRight } from "lucide-react";

const CTA = () => {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Ready to Transform
                        <span className="block text-primary">Your Business?</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Whether you&apos;re launching something new, scaling up, or need a partner who genuinely
                        cares about your business goals - let&apos;s talk.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Main CTA Card */}
                    <Card className="bg-gradient-card border-border shadow-strong mb-8">
                        <CardContent className="p-8 md:p-12 text-center">
                            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 text-sm font-semibold mb-6">
                                <Calendar className="w-4 h-4" />
                                Free Business Audit Call
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Book Your Free Business Audit Call Today
                            </h3>

                            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Get a comprehensive analysis of your current business setup, identify growth
                                opportunities, and receive a customized strategy roadmap - absolutely free.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <Button size="lg" variant="gradient" className="text-lg px-8 py-4 h-auto rounded-full group">
                                    Book Free Audit Call
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button size="lg" variant="outline" className="text-lg px-8 rounded-full py-4 h-auto">
                                    <Phone className="w-5 h-5 mr-2" />
                                    Call Now
                                </Button>
                            </div>

                            <div className="text-sm text-muted-foreground">
                                <strong>What you&apos;ll get:</strong> Business analysis • Growth strategy • Implementation roadmap • No obligations
                            </div>
                        </CardContent>
                    </Card>

                    {/* Contact Options */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="border-border shadow-soft hover:shadow-medium transition-all duration-300 group">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <h4 className="font-semibold text-foreground mb-2">Call Direct</h4>
                                <p className="text-sm text-muted-foreground mb-3">Speak with our team immediately</p>
                                <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover">
                                    +91 XXXXX XXXXX
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-border shadow-soft hover:shadow-medium transition-all duration-300 group">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <h4 className="font-semibold text-foreground mb-2">Email Us</h4>
                                <p className="text-sm text-muted-foreground mb-3">Send us your requirements</p>
                                <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover">
                                    hello@improvebizz.com
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-border shadow-soft hover:shadow-medium transition-all duration-300 group">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                    <Calendar className="w-6 h-6 text-primary" />
                                </div>
                                <h4 className="font-semibold text-foreground mb-2">Schedule Online</h4>
                                <p className="text-sm text-muted-foreground mb-3">Pick a time that works for you</p>
                                <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover">
                                    Book Calendar
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Footer Note */}
                    <div className="text-center mt-12 p-6 bg-muted/30 rounded-xl">
                        <p className="text-sm text-muted-foreground">
                            <strong className="text-foreground">Limited Availability:</strong> We&apos;re currently accepting a limited number of new clients
                            to ensure exceptional service quality. Book your consultation today to secure your spot.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;