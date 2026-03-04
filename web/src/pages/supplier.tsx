import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Title, TitleDescription, TitleRoot } from '@/components/ui/title';
import { SidebarLayout } from '@/layout/sidebarlayout';
import { Bell, Pin, Plus, SearchIcon } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import { Field, FieldLabel } from '@/components/ui/field';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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
        <div className="p-8 flex items-center justify-between">
          <TitleRoot>
            <Title>Gerenciar Fornecedores</Title>
            <TitleDescription>
              Visualize, filtre e gerencie seus parceiros comerciais cadastrados
            </TitleDescription>
          </TitleRoot>

          <div>
            <Button className="bg-violet-700" size="lg">
              <Plus /> Novo Fornecedor
            </Button>
          </div>
        </div>

        <div className="p-8 m-8 bg-[#18181B] border border-zinc-800 rounded-2xl">
          <div className="flex flex-col md:flex-row gap-4 max-w-5xl items-end">
            {/* Campo 1: Buscar */}
            <Field className="flex-[2]">
              <FieldLabel htmlFor="search-input" className="text-zinc-300">
                Buscar
              </FieldLabel>
              {/* Adicionado border e border-zinc-800 aqui no InputGroup */}
              <InputGroup className="border border-zinc-800 rounded-md">
                <InputGroupInput
                  id="search-input"
                  placeholder="Razão Social, CNPJ ou Nome Fantasia"
                  className="bg-transparent text-white"
                />
                <InputGroupAddon align="inline-start">
                  <SearchIcon className="text-muted-foreground" />
                </InputGroupAddon>
              </InputGroup>
            </Field>

            {/* Campo 2: Cidade */}
            <Field className="flex-1">
              <FieldLabel htmlFor="city-input" className="text-zinc-300">
                Cidade
              </FieldLabel>
              {/* Adicionado border e border-zinc-800 aqui também */}
              <InputGroup className="border border-zinc-800 rounded-md">
                <InputGroupInput
                  id="city-input"
                  placeholder="Todas as cidades"
                  className="bg-transparent text-white"
                />
                <InputGroupAddon align="inline-start">
                  <Pin className="text-muted-foreground" />
                </InputGroupAddon>
              </InputGroup>
            </Field>

            {/* Campo 3: Select */}
            <Field className="w-full md:w-[180px]">
              <FieldLabel className="text-zinc-300">Status</FieldLabel>
              <Select>
                {/* Select já estava com border-zinc-800 */}
                <SelectTrigger className="w-full text-white bg-[#18181B] border border-zinc-800 rounded-md">
                  <SelectValue placeholder="Filtrar status" />
                </SelectTrigger>

                <SelectContent className="bg-[#18181B] border border-zinc-800 text-white rounded-md">
                  <SelectGroup>
                    <SelectItem
                      value="autorizada"
                      className="focus:bg-zinc-800 focus:text-white"
                    >
                      Autorizada
                    </SelectItem>
                    <SelectItem
                      value="cancelada"
                      className="focus:bg-zinc-800 focus:text-white"
                    >
                      Cancelada
                    </SelectItem>
                    <SelectItem
                      value="cadastro"
                      className="focus:bg-zinc-800 focus:text-white"
                    >
                      Em cadastro
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
          </div>
        </div>

        <div className="p-8">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">
                  FORNECEDOR / RAZÃO SOCIAL
                </TableHead>
                <TableHead>CNPJ</TableHead>
                <TableHead>LOCALIZAÇÃO</TableHead>
                <TableHead>CONTATO</TableHead>
                <TableHead className="text-right">STATUS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>45.123.456/0001-89</TableCell>
                <TableCell>
                  São Paulo <br /> SP
                </TableCell>
                <TableCell>
                  contato@techsolutions.com.br <br />
                  Caralho
                </TableCell>
                <TableCell className="text-right">Ativo</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>45.123.456/0001-89</TableCell>
                <TableCell>
                  São Paulo <br /> SP
                </TableCell>
                <TableCell>
                  contato@techsolutions.com.br <br />
                  Caralho
                </TableCell>
                <TableCell className="text-right">Ativo</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </main>
    </SidebarProvider>
  );
};

export { Supplier };
