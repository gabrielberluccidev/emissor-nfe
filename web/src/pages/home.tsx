import { SidebarProvider } from '@/components/ui/sidebar';
import { SidebarLayout } from '@/layout/sidebarlayout';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Bell,
  ChevronDownIcon,
  TrendingUp,
  ClipboardMinus,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import * as React from 'react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
import { ScrollArea } from '@/components/ui/scroll-area';

const Homepage = () => {
  const chartData = [
    { month: 'January', desktop: 186 },
    { month: 'February', desktop: 305 },
    { month: 'March', desktop: 237 },
    { month: 'April', desktop: 73 },
    { month: 'May', desktop: 209 },
    { month: 'June', desktop: 214 },
  ];
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: '#8b5cf6',
    },
  } satisfies ChartConfig;

  const [date, setDate] = React.useState<Date>();

  // MOCK DATA
  interface notesData {
    numnf: string;
    client: string;
    status: string;
    value: string;
  }
  // MOCK DATA
  const notesData: notesData[] = [];
  // MOCK DATA
  for (let i: number = 1; i < 20; i++) {
    if (i % 2 == 0) {
      notesData.push({
        numnf: i.toString(),
        client: `Cliente ${120 + i}`,
        status: 'Cancelada',
        value: `R$ ${100 + i}`,
      });
    } else {
      notesData.push({
        numnf: i.toString(),
        client: `Cliente ${120 + i}`,
        status: 'Autorizada',
        value: `R$ ${100 + i}`,
      });
    }
  }

  const getStatusColor = (status: string) => {
    if (status === 'Autorizada') {
      return 'text-emerald-500 bg-emerald-500/10';
    }
    if (status === 'Cancelada') {
      return 'text-red-500 bg-red-500/10';
    }
    return 'text-zinc-400 bg-zinc-800';
  };

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
                  <BreadcrumbLink href="../pages/home.tsx">
                    Dashboard
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
          <div>
            <h1 className="text-4xl mb-4">Visão Geral</h1>
            <p className="text-zinc-400">
              Acompanhe o desempenho das suas emissões fiscais em tempo real.
            </p>
          </div>

          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  data-empty={!date}
                  className="data-[empty=true]:text-muted-foreground w-[212px] justify-between text-left font-normal"
                >
                  {date ? format(date, 'PPP') : <span>Escolha a data</span>}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto p-0 bg-black border-zinc-800 text-white"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  defaultMonth={date}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="p-8 flex gap-8">
          <Card className="mx-auto w-full max-w-sm bg-[#18181B]">
            <CardHeader>
              <CardTitle>Faturamento Mensal</CardTitle>
              <CardDescription>R$145.230,00</CardDescription>
            </CardHeader>
            <CardContent>
              <p>2.5% vs último mês</p>
            </CardContent>
          </Card>

          <Card className="mx-auto w-full max-w-sm bg-[#18181B]">
            <CardHeader>
              <CardTitle>Notas Emitidas</CardTitle>
              <CardDescription>354</CardDescription>
            </CardHeader>
            <CardContent>
              <p>2.5% vs último mês</p>
            </CardContent>
          </Card>

          <Card className="mx-auto w-full max-w-sm bg-[#18181B]">
            <CardHeader>
              <CardTitle>Notas Pendentes</CardTitle>
              <CardDescription>2</CardDescription>
            </CardHeader>
            <CardContent>
              <p>2.5% vs último mês</p>
            </CardContent>
          </Card>

          <Card className="mx-auto w-full max-w-sm bg-[#18181B]">
            <CardHeader>
              <CardTitle>Ticket Médio</CardTitle>
              <CardDescription>R$424,65</CardDescription>
            </CardHeader>
            <CardContent>
              <p>2.5% vs último mês</p>
            </CardContent>
          </Card>
        </div>

        <div className="p-8 grid grid-cols-[3fr_1fr] gap-4">
          <div>
            <Card className="bg-[#18181B]">
              <CardHeader>
                <CardTitle>Faturamento Semestral</CardTitle>
                <CardDescription>
                  Evolução da receita bruta nos últimos 6 meses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig}>
                  <AreaChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                      left: 12,
                      right: 12,
                    }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="line" />}
                    />
                    <Area
                      dataKey="desktop"
                      type="natural"
                      fill="var(--color-desktop)"
                      fillOpacity={0.4}
                      stroke="var(--color-desktop)"
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
              <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2 leading-none font-medium">
                      Trending up by 5.2% this month{' '}
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    <div className="text-muted-foreground flex items-center gap-2 leading-none">
                      January - June 2024
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>

          <div>
            <ScrollArea className="h-[740px] w-[350px] rounded-md border p-4 bg-[#18181B]">
              <div className="flex justify-between p-4">
                <h3>Últimas Notas</h3>
                <a href="#" className="text-violet-500 hover:cursor-pointer">
                  Ver todas
                </a>
              </div>

              <div className="p-4">
                {notesData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between mb-6"
                    >
                      <div className="flex items-center gap-4">
                        <ClipboardMinus />
                        <div>
                          <h4>{item.numnf}</h4>
                          <p className="text-sm text-zinc-300">{item.client}</p>
                        </div>
                      </div>

                      <div>
                        <span
                          className={`${getStatusColor(item.status)} text-xs font-medium px-2 py-1 rounded-full`}
                        >
                          {item.status}
                        </span>
                        <p className="text-sm px-2 py-1 text-zinc-300">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollArea>
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
};

export { Homepage };
