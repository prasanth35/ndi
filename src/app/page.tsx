import { Fragment } from "react";
import dynamic from "next/dynamic";
import PaddingContainer from "@/components/common/paddingContainer";
import Hero from "@/components/home/hero";
import PartnerLogo from "@/components/home/partnerLogo";
import Features from "@/components/home/features";
import PopularSection from "@/components/home/Popular";
import Services from "@/components/home/services";
const Testimonials = dynamic(() => import("@/components/home/testimonials"));
const Faq = dynamic(() => import("@/components/home/faq"));
const UnlockPath = dynamic(() => import("@/components/home/unlockPath"));

export default function Home() {
  return (
    <Fragment>
      <PaddingContainer>
        <Hero />
      </PaddingContainer>
        <PartnerLogo/>
      <PaddingContainer>
        <Features className="mt-10" />
      </PaddingContainer>
      <PaddingContainer className="p-0 pl-8 pr-2">
        <PopularSection className="mb-10" />
      </PaddingContainer>
      <PaddingContainer>
        <Services className="mb-14" />
      </PaddingContainer>
      <Testimonials />
      <PaddingContainer>
        <Faq />
      </PaddingContainer>
      <PaddingContainer className="p-0">
        <UnlockPath />
      </PaddingContainer>
    </Fragment>
  );
}
