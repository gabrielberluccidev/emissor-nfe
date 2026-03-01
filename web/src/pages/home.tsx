import { SidebarProvider } from '@/components/ui/sidebar';
import { SidebarLayout } from '@/layout/sidebarlayout';

const Homepage = () => {
  return (
    <div className="grid grid-cols-2">
      <SidebarProvider>
        <SidebarLayout />
      </SidebarProvider>
    </div>
  );
};

export { Homepage };
