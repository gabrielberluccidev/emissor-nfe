import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
} from '@/components/ui/sidebar';
import {
  FileText,
  LayoutDashboard,
  LogOut,
  PackageSearch,
  Settings,
  UsersRound,
} from 'lucide-react';

const SidebarLayout = () => {
  return (
    <Sidebar className="bg-[#09090B]">
      <SidebarHeader>
        <div className="flex gap-4 items-center">
          <Avatar>
            <AvatarImage src="https://i.pinimg.com/736x/42/fc/a3/42fca3c24df31ddf6b1dec5ce7675227.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div>
            <h1 className="text-black">Emissor NFe</h1>
            <p className="text-gray-400">Plano Enterprise</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="text-white">
        <SidebarGroup>
          <Button
            className="hover:bg-[#5B13EC10] hover:text-[#5B13EC] justify-start"
            size="sm"
          >
            <LayoutDashboard /> Dashboard
          </Button>
        </SidebarGroup>

        <SidebarGroup>
          <Button
            className="hover:bg-[#5B13EC10] hover:text-[#5B13EC] justify-start"
            size="sm"
          >
            <FileText /> Notas Fiscais
          </Button>
        </SidebarGroup>
        <SidebarGroup>
          <Button
            className="hover:bg-[#5B13EC10] hover:text-[#5B13EC] justify-start"
            size="sm"
          >
            <UsersRound /> Clientes
          </Button>
        </SidebarGroup>
        <SidebarGroup>
          <Button
            className="hover:bg-[#5B13EC10] hover:text-[#5B13EC] justify-start"
            size="sm"
          >
            <PackageSearch /> Produtos
          </Button>
        </SidebarGroup>

        <SidebarGroup>
          <Button
            className="hover:bg-[#5B13EC10] hover:text-[#5B13EC] justify-start"
            size="sm"
          >
            <Settings /> Configuração
          </Button>
        </SidebarGroup>

        <SidebarGroup>
          <Button
            className="hover:bg-[#5B13EC10] hover:text-[#5B13EC] justify-start"
            size="sm"
          >
            <LogOut /> Sair
          </Button>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export { SidebarLayout };
