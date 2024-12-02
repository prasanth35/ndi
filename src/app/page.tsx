import PaddingContainer from "@/components/common/paddingContainer";
import Faq from "@/components/home/faq";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import PartnerLogo from "@/components/home/partnerLogo";
import PopularSection from "@/components/home/Popular";
import Services from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";
import UnlockPath from "@/components/home/unlockPath";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <PaddingContainer>
        <Hero className=" mt-4 sm:mt-12" />
      </PaddingContainer>
      <PaddingContainer>
        <PartnerLogo className="mt-14" />
      </PaddingContainer>
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
