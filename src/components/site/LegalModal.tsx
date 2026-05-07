import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { type ReactNode } from "react";

type LegalKind = "impressum" | "datenschutz";

export function LegalModal({
  open,
  onOpenChange,
  kind,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  kind: LegalKind;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[85vh] p-0 overflow-hidden border-border">
        <DialogHeader className="px-8 pt-8 pb-4 border-b border-border">
          <div className="eyebrow">{kind === "impressum" ? "Rechtliches" : "Privatsphäre"}</div>
          <DialogTitle className="font-display text-3xl md:text-4xl mt-2">
            {kind === "impressum" ? "Impressum" : "Datenschutz"}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[65vh] px-8 py-6">
          {kind === "impressum" ? <Impressum /> : <Datenschutz />}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-8">
      <h3 className="font-display text-xl mb-3">{title}</h3>
      <div className="text-muted-foreground leading-relaxed text-sm space-y-2">{children}</div>
    </section>
  );
}

function Impressum() {
  return (
    <div>
      <Block title="Angaben gemäß § 5 TMG">
        <p>Central Garage Chemnitz<br />Adelsbergstraße 32<br />09126 Chemnitz</p>
      </Block>
      <Block title="Kontakt">
        <p>Telefon: 0371 7714672<br />E-Mail: hey@beezy-labs.com</p>
      </Block>
      <Block title="Umsatzsteuer-ID">
        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: auf Anfrage.</p>
      </Block>
      <Block title="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV">
        <p>Geschäftsleitung Central Garage Chemnitz, Anschrift wie oben.</p>
      </Block>
      <Block title="Haftung für Inhalte">
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
          nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
        </p>
      </Block>
      <Block title="Haftung für Links">
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
          Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
          verantwortlich.
        </p>
      </Block>
      <Block title="Urheberrecht">
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke unterliegen dem deutschen
          Urheberrecht. Vervielfältigung, Bearbeitung und jede Art der Verwertung bedürfen der
          schriftlichen Zustimmung.
        </p>
      </Block>
    </div>
  );
}

function Datenschutz() {
  return (
    <div>
      <Block title="1. Datenschutz auf einen Blick">
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
          personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.
        </p>
      </Block>
      <Block title="2. Verantwortliche Stelle">
        <p>
          Central Garage Chemnitz<br />Adelsbergstraße 32<br />09126 Chemnitz<br />
          Telefon: 0371 7714672<br />E-Mail: hey@beezy-labs.com
        </p>
      </Block>
      <Block title="3. Datenerfassung auf dieser Website">
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Beim Besuch
          der Website werden technisch notwendige Informationen (z.&nbsp;B. IP-Adresse,
          Browsertyp) automatisch erfasst.
        </p>
      </Block>
      <Block title="4. Kontaktformular">
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
          Anfrageformular zwecks Bearbeitung der Anfrage gespeichert. Diese Daten geben wir nicht
          ohne Ihre Einwilligung weiter.
        </p>
      </Block>
      <Block title="5. Ihre Rechte">
        <p>
          Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
          Verarbeitung Ihrer Daten sowie ein Beschwerderecht bei der zuständigen Aufsichtsbehörde.
        </p>
      </Block>
      <Block title="6. Cookies & Analyse">
        <p>
          Diese Website verwendet ausschließlich technisch notwendige Cookies. Es erfolgt keine
          Nutzeranalyse durch Drittanbieter ohne ausdrückliche Einwilligung.
        </p>
      </Block>
    </div>
  );
}
