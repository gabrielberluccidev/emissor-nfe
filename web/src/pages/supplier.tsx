import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { SidebarProvider } from '@/components/ui/sidebar';
import { SidebarLayout } from '@/layout/sidebarlayout';
import { Bell } from 'lucide-react';

const Supplier = () => {
  return (
    <SidebarProvider>
      <SidebarLayout />
      <main className="bg-[#09090B] text-white w-full min-h-screen">
        <div className="flex items-center justify-between p-4">
          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="../pages/supplier.tsx">
                    Fornecedores
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="flex items-center gap-8">
            <Bell />
            <Avatar>
              <AvatarImage src="https://i.pinimg.com/736x/42/fc/a3/42fca3c24df31ddf6b1dec5ce7675227.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
};

export { Supplier };
