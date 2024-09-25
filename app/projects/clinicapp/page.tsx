import { ClinicApp } from "@/components/clinicapp";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function ClinicAppPage() {
  return (
    <div>
      <TextGenerateEffect words={"Clinic  System"} />

      <ClinicApp />
    </div>
  );
}
