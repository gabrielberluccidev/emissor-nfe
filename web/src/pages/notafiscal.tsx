import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const NotaFiscal = () => {
  return (
    <div className="p-8 bg-[#0a0a0b] text-white min-h-screen font-sans">
      {/* CABEÇALHO */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Emitir Nova Nota Fiscal</h1>
          <p className="text-zinc-400">
            Preencha os dados abaixo para gerar o documento fiscal.
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="border-zinc-800 text-white hover:bg-zinc-900"
          >
            Salvar Rascunho
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Emitir NFe
          </Button>
        </div>
      </div>

      <Tabs defaultValue="dados" className="w-full">
        <TabsList className="bg-transparent border-b border-zinc-800 w-full justify-start rounded-none h-auto p-0 pb-2 mb-8 gap-2">
          <TabsTrigger
            value="dados"
            className="data-[state=active]:border-b-2 data-[state=active]:border-purple-600 rounded-none bg-transparent px-6 text-zinc-400 data-[state=active]:text-white"
          >
            Dados Gerais e Itens
          </TabsTrigger>
          <TabsTrigger
            value="destinatario"
            className="data-[state=active]:border-b-2 data-[state=active]:border-purple-600 rounded-none bg-transparent px-6 text-zinc-400 data-[state=active]:text-white"
          >
            Destinatário
          </TabsTrigger>
          <TabsTrigger
            value="transporte"
            className="data-[state=active]:border-b-2 data-[state=active]:border-purple-600 rounded-none bg-transparent px-6 text-zinc-400 data-[state=active]:text-white"
          >
            Transporte
          </TabsTrigger>
          <TabsTrigger
            value="pagamento"
            className="data-[state=active]:border-b-2 data-[state=active]:border-purple-600 rounded-none bg-transparent px-6 text-zinc-400 data-[state=active]:text-white"
          >
            Pagamento
          </TabsTrigger>
          <TabsTrigger
            value="informações Adicionais"
            className="data-[state=active]:border-b-2 data-[state=active]:border-purple-600 rounded-none bg-transparent px-6 text-zinc-400 data-[state=active]:text-white"
          >
            Informações Adicionais
          </TabsTrigger>
        </TabsList>

        {/* --- ABA 1: DADOS GERAIS --- */}
        <TabsContent value="dados">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* CARD 1: DADOS DA OPERAÇÃO */}
              <Card className="bg-[#111113] border-zinc-800 text-white">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">
                    Dados da Operação
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-zinc-400">
                      Natureza da Operação
                    </label>
                    <Input
                      className="bg-white text-black h-10"
                      placeholder="Venda de mercadoria"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-zinc-400">
                      Data de Emissão
                    </label>
                    <Input type="date" className="bg-white text-black h-10" />
                  </div>
                </CardContent>
              </Card>

              {/* CARD 2: ADICIONAR ITENS */}
              <Card className="bg-[#111113] border-zinc-800 text-white">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">
                    Itens da Nota
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Formulário de Entrada do Item */}
                  <div className="grid grid-cols-12 gap-4 bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
                    <div className="col-span-12 md:col-span-6 space-y-2">
                      <label className="text-sm text-zinc-400">
                        Nome do Produto
                      </label>
                      <Input
                        className="bg-white text-black h-10"
                        placeholder="Descrição do produto"
                      />
                    </div>
                    <div className="col-span-6 md:col-span-3 space-y-2">
                      <label className="text-sm text-zinc-400">
                        Cód. Barras (EAN)
                      </label>
                      <Input
                        className="bg-white text-black h-10"
                        placeholder="789..."
                      />
                    </div>
                    <div className="col-span-6 md:col-span-3 space-y-2">
                      <label className="text-sm text-zinc-400">NCM</label>
                      <Input
                        className="bg-white text-black h-10"
                        placeholder="0000.00.00"
                      />
                    </div>

                    <div className="col-span-4 md:col-span-3 space-y-2">
                      <label className="text-sm text-zinc-400">
                        Quantidade
                      </label>
                      <Input
                        type="number"
                        className="bg-white text-black h-10"
                        placeholder="1"
                      />
                    </div>
                    <div className="col-span-4 md:col-span-3 space-y-2">
                      <label className="text-sm text-zinc-400">
                        Valor Unitário
                      </label>
                      <Input
                        className="bg-white text-black h-10"
                        placeholder="0,00"
                      />
                    </div>
                    <div className="col-span-4 md:col-span-3 space-y-2">
                      <label className="text-sm text-zinc-400">
                        Valor Total
                      </label>
                      <Input
                        className="bg-zinc-800 text-zinc-400 h-10 border-none"
                        disabled
                        placeholder="0,00"
                      />
                    </div>
                    <div className="col-span-12 md:col-span-3 flex items-end">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 h-10">
                        Adicionar Item
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-md border border-zinc-800">
                    <Table>
                      <TableHeader className="bg-zinc-900/50">
                        <TableRow className="border-zinc-800 hover:bg-transparent">
                          <TableHead className="text-zinc-400">
                            Produto
                          </TableHead>
                          <TableHead className="text-zinc-400">NCM</TableHead>
                          <TableHead className="text-zinc-400 text-center">
                            Qtd
                          </TableHead>
                          <TableHead className="text-zinc-400 text-right">
                            Unitário
                          </TableHead>
                          <TableHead className="text-zinc-400 text-right">
                            Total
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="border-zinc-800">
                          <TableCell className="font-medium"></TableCell>
                          <TableCell></TableCell>
                          <TableCell className="text-center"></TableCell>
                          <TableCell className="text-right">R$</TableCell>
                          <TableCell className="text-right text-purple-400 font-bold">
                            R$
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* RESUMO LATERAL */}
            <div className="lg:col-span-1">
              <ResumoCard />
            </div>
          </div>
        </TabsContent>
        {/* --- ABA 2: DESTINATÁRIO  */}
        <TabsContent value="destinatario">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-[#111113] border-zinc-800 text-white">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">
                    Identificação do Destinatário
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-zinc-400">
                        Tipo de Pessoa
                      </label>
                      <div className="flex items-center gap-4 pt-2">
                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                          <input
                            type="radio"
                            name="tipo"
                            className="accent-purple-600"
                            defaultChecked
                          />{" "}
                          CPF
                        </label>
                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                          <input
                            type="radio"
                            name="tipo"
                            className="accent-purple-600"
                          />{" "}
                          CNPJ
                        </label>
                      </div>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm text-zinc-400">
                        CNPJ / CPF
                      </label>
                      <Input
                        className="bg-white text-black h-10"
                        placeholder="CNPJ / CPF"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-zinc-400">
                        Inscrição Estadual
                      </label>
                      <Input
                        className="bg-white text-black h-10"
                        placeholder="Inscrição Estadual"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-zinc-400">
                      Razão Social / Nome Completo
                    </label>
                    <Input
                      className="bg-white text-black h-10"
                      placeholder="Razão Social / Nome Completo"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-sm text-zinc-400">
                        E-mail Principal
                      </label>
                      <Input
                        className="bg-white text-black h-10"
                        placeholder="Enviar um E-mail automático"
                      />
                      <p className="text-[10px] text-zinc-500">
                        Enviar principal para envio automático.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-zinc-400">
                        Telefone de Contato
                      </label>
                      <Input
                        className="bg-white text-black h-10"
                        placeholder="Telefone de Contato"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#111113] border-zinc-800 text-white">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">
                    Endereço Completo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-2 space-y-2">
                      <label className="text-sm text-zinc-400">CEP</label>
                      <Input
                        className="bg-white text-black h-10"
                        placeholder="CEP"
                      />
                    </div>
                    <div className="col-span-6 space-y-2">
                      <label className="text-sm text-zinc-400">
                        Logradouro (Rua)
                      </label>
                      <Input
                        className="bg-white text-black h-10"
                        placeholder="Logradouro (Rua)"
                      />
                    </div>
                    <div className="col-span-1 space-y-2">
                      <label className="text-sm text-zinc-400">Núm.</label>
                      <Input className="bg-white text-black h-10" />
                    </div>
                    <div className="col-span-3 space-y-2">
                      <label className="text-sm text-zinc-400">
                        Complemento
                      </label>
                      <Input
                        className="bg-white text-black h-10"
                        placeholder="Comp."
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6 space-y-2">
                      <label className="text-sm text-zinc-400">Bairro</label>
                      <Input
                        className="bg-white text-black h-10"
                        placeholder="Bairro"
                      />
                    </div>
                    <div className="col-span-4 space-y-2">
                      <label className="text-sm text-zinc-400">Cidade</label>
                      <Input
                        className="bg-white text-black h-10"
                        placeholder="Cidade"
                      />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <label className="text-sm text-zinc-400">UF</label>
                      <select className="w-full h-10 rounded-md border-none bg-white text-black px-3 text-sm focus:ring-2 focus:ring-purple-600">
                        <option value="AC">AC</option>
                        <option value="AL">AL</option>
                        <option value="AP">AP</option>
                        <option value="AM">AM</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MT">MT</option>
                        <option value="MS">MS</option>
                        <option value="MG">MG</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PR">PR</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RS">RS</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="SC">SC</option>
                        <option value="SP">SP</option>
                        <option value="SE">SE</option>
                        <option value="TO">TO</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-1">
              <ResumoCard />
            </div>
          </div>
        </TabsContent>

        {/* --- ABA 3: TRANSPORTE --- */}
        <TabsContent value="transporte">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* 2. CARD: MODALIDADE E VEÍCULO */}
              <Card className="bg-[#111113] border-zinc-800 text-white">
                <CardHeader className="flex flex-row items-center gap-2">
                  <div className="p-1.5 bg-purple-500/10 rounded-md">
                    <span className="text-purple-500 text-sm">🚚</span>
                  </div>
                  <CardTitle className="text-lg font-medium">
                    Modalidade do Frete e Veículo
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Linha 1: Dados da Transportadora */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-zinc-400">
                        CNPJ da Transportadora
                      </label>
                      <Input
                        className="bg-white text-black h-10"
                        placeholder="00.000.000/0000-00"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-zinc-400">
                        Inscrição Estadual da Transportadora
                      </label>
                      <Input
                        className="bg-white text-black h-10"
                        placeholder="Inscrição Estadual"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-zinc-400">
                      Razão Social da Transportadora
                    </label>
                    <Input
                      className="bg-white text-black h-10"
                      placeholder="Nome da empresa de transporte"
                    />
                  </div>

                  {/* Linha 3: Dados do Veículo */}
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-4 space-y-2">
                      <label className="text-sm text-zinc-400">
                        Placa do Veículo
                      </label>
                      <Input
                        className="bg-white text-black h-10"
                        placeholder="ABC-1234"
                      />
                    </div>
                    <div className="col-span-12 md:col-span-5 space-y-2">
                      <label className="text-sm text-zinc-400">RNTRC</label>
                      <Input
                        className="bg-white text-black h-10"
                        placeholder="Registro"
                      />
                    </div>
                    <div className="col-span-12 md:col-span-3 space-y-2">
                      <label className="text-sm text-zinc-400">
                        UF Veículo
                      </label>
                      <select className="w-full h-10 rounded-md bg-white text-black px-3 text-sm outline-none focus:ring-2 focus:ring-purple-600">
                        <option value="AL">AL</option>
                        <option value="AP">AP</option>
                        <option value="AM">AM</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MT">MT</option>
                        <option value="MS">MS</option>
                        <option value="MG">MG</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PR">PR</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RS">RS</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="SC">SC</option>
                        <option value="SP">SP</option>
                        <option value="SE">SE</option>
                        <option value="TO">TO</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 3. CARD: VOLUMES TRANSPORTADOS */}
              <Card className="bg-[#111113] border-zinc-800 text-white">
                <CardHeader className="flex flex-row items-center gap-2">
                  <div className="p-1.5 bg-purple-500/10 rounded-md">
                    <span className="text-purple-500 text-sm">📦</span>
                  </div>
                  <CardTitle className="text-lg font-medium">
                    Volumes Transportados
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-2 space-y-2">
                      <label className="text-sm text-zinc-400">
                        Quantidade
                      </label>
                      <Input
                        className="bg-white text-black h-10"
                        placeholder="1"
                      />
                    </div>
                    <div className="col-span-12 md:col-span-5 space-y-2">
                      <label className="text-sm text-zinc-400">Espécie</label>
                      <Input
                        className="bg-white text-black h-10"
                        placeholder="Caixas"
                      />
                    </div>
                    <div className="col-span-12 md:col-span-5 space-y-2">
                      <label className="text-sm text-zinc-400">Marca</label>
                      <Input
                        className="bg-white text-black h-10"
                        placeholder="Diversos"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-zinc-400">
                        Peso Bruto (kg)
                      </label>
                      <Input
                        className="bg-white text-black h-10"
                        placeholder="10.500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-zinc-400">
                        Peso Líquido (kg)
                      </label>
                      <Input
                        className="bg-white text-black h-10"
                        placeholder="10.000"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <ResumoCard />
            </div>
          </div>
        </TabsContent>
        {/* --- ABA 4: PAGAMENTO --- */}
        <TabsContent value="pagamento">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* 2. CARD: FORMA DE PAGAMENTO */}
              <Card className="bg-[#111113] border-zinc-800 text-white">
                <CardHeader className="flex flex-row items-center gap-2">
                  <div className="p-1.5 bg-purple-500/10 rounded-md">
                    <span className="text-purple-500 text-sm">💰</span>
                  </div>
                  <CardTitle className="text-lg font-medium">
                    Informações de Pagamento
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-zinc-400">
                        Forma de Pagamento
                      </label>
                      <select className="w-full h-10 rounded-md bg-white text-black px-3 text-sm outline-none focus:ring-2 focus:ring-purple-600">
                        <option value="01">01 - Dinheiro</option>
                        <option value="02">02 - Cheque</option>
                        <option value="03">03 - Cartão de Crédito</option>
                        <option value="04">04 - Cartão de Débito</option>
                        <option value="05">05 - Crédito Loja</option>
                        <option value="10">10 - Vale Alimentação</option>
                        <option value="14">14 - Duplicata Mercantil</option>
                        <option value="15">15 - Boleto Bancário</option>
                        <option value="16">16 - Deposito Bancario</option>
                        <option value="17">17 - Pagamento Instantâneo</option>
                        <option value="18">18 - Transferencia Bancaria</option>
                        <option value="90">90 - Sem Pagamento</option>
                        <option value="99">99 - Outros</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-zinc-400">
                        Indicador de Pagamento
                      </label>
                      <select className="w-full h-10 rounded-md bg-white text-black px-3 text-sm outline-none focus:ring-2 focus:ring-purple-600">
                        <option value="0">0 - Pagamento à Vista</option>
                        <option value="1">1 - Pagamento à Prazo</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 3. CARD: CRONOGRAMA DE PAGAMENTO (PARCELAS) */}
              <Card className="bg-[#111113] border-zinc-800 text-white">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-purple-500/10 rounded-md">
                      <span className="text-purple-500 text-sm">📅</span>
                    </div>
                    <CardTitle className="text-lg font-medium">
                      Parcelas / Duplicatas
                    </CardTitle>
                  </div>
                  <Button
                    variant="outline"
                    className="h-8 text-xs border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                  >
                    + Gerar Parcelas
                  </Button>
                </CardHeader>

                <CardContent>
                  <div className="rounded-md border border-zinc-800 overflow-hidden">
                    <Table>
                      <TableHeader className="bg-zinc-900/40">
                        <TableRow className="border-zinc-800 hover:bg-transparent">
                          <TableHead className="text-zinc-400 text-xs uppercase">
                            Nº Parcela
                          </TableHead>
                          <TableHead className="text-zinc-400 text-xs uppercase">
                            Vencimento
                          </TableHead>
                          <TableHead className="text-zinc-400 text-xs uppercase text-right">
                            Valor da Parcela
                          </TableHead>
                          <TableHead className="w-10"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="border-zinc-800 hover:bg-zinc-900/40">
                          <TableCell className="font-medium">001</TableCell>
                          <TableCell>
                            <Input
                              type="date"
                              className="bg-white text-black h-8 w-40 text-xs"
                              defaultValue="2023-11-27"
                            />
                          </TableCell>
                          <TableCell className="text-right font-bold text-purple-400">
                          </TableCell>
                          <TableCell>
                            <button className="text-zinc-600 hover:text-red-500">
                              🗑️
                            </button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <p className="text-[10px] text-zinc-500 mt-4 italic">
                    * O somatório das parcelas deve ser igual ao valor total da
                    nota.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 4. RESUMO LATERAL */}
            <div className="lg:col-span-1">
              <ResumoCard />
            </div>
          </div>
        </TabsContent>

        {/* --- ABA 5: INFO ADICIONAIS --- */}
        <TabsContent value="informações Adicionais">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-[#111113] border-zinc-800 text-white">
                <CardHeader>
                  <CardTitle className="text-lg">Observações</CardTitle>
                </CardHeader>
                <CardContent>
                  <textarea
                    className="w-full h-32 bg-zinc-900 border border-zinc-800 rounded-md p-3 text-sm focus:ring-1 focus:ring-purple-600 outline-none"
                    placeholder="Notas fiscais..."
                  />
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-1">
              <ResumoCard />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Componente do Resumo para não repetir código
const ResumoCard = () => (
  <Card className="bg-[#111113] border-zinc-800 text-white sticky top-8">
    <CardHeader>
      <CardTitle className="text-lg">Resumo da Nota</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="flex justify-between text-zinc-400 text-sm">
        <span>Total ICMS</span>
        <span>R$ </span>
      </div>
      <div className="flex justify-between text-zinc-400 text-sm">
        <span>Total ICMS</span>
        <span>R$ </span>
      </div>
      <div className="pt-4 border-t border-zinc-800 space-y-1">
        <span className="text-zinc-400 text-xs uppercase">Valor Total</span>
        <p className="text-3xl font-bold text-purple-500">R$</p>
      </div>
      <Button className="w-full bg-purple-600 hover:bg-purple-700 h-12 mt-4 font-semibold">
        Prosseguir para Proxima Tela
      </Button>
    </CardContent>
  </Card>
);

export default NotaFiscal;
