import { SidebarProvider } from '@/components/ui/sidebar';
import { SidebarLayout } from '@/layout/sidebarlayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NotaFiscal = () => {
  return (
    <SidebarProvider>
      <div className="grid grid-cols-[auto_1fr] min-h-screen w-full bg-[#0a0a0b]">
        <SidebarLayout />
        <main className="p-8 text-white overflow-y-auto">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-3xl font-bold">Emitir Nova Nota Fiscal</h1>
            <Button variant="default">Gerar Nota Fiscal</Button>
          </div>
          <p className="mt-4 text-lg">Preencha os detalhes da nota fiscal abaixo:</p>
          <div className="flex gap-3">
          <Button variant="outline" className="border-zinc-800 text-white bg-transparent">
                Salvar Rascunho
          </Button>
          <Button className="bg-[#6d28d9] hover:bg-[#5b21b6] text-white">
                Emitir NFe
          </Button>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default NotaFiscal;