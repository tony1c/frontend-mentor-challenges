import { ContentLayout } from "./components/layouts/content-layout";
import { Advice } from "./components/ui/Advice";
import { AppContainer } from "./components/ui/app-container";

export default function App() {
  return (
    <main className="bg-c-dark-blue font-manrope">
      <ContentLayout>
        <AppContainer>
          <Advice />
        </AppContainer>
      </ContentLayout>
    </main>
  );
}
