import { useState } from "react";
import {
  DemographicSexChart,
  DemographicRaceChart,
  ConfirmationCriteriaChart,
  CasesByMonthChart,
  WeeklyEpidemicChart,
} from "@/components/Charts";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";

export default function Home() {
  const [startWeek, setStartWeek] = useState("1");
  const [endWeek, setEndWeek] = useState("13");
  const [ageGroup, setAgeGroup] = useState("all");



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cabeçalho */}
      <div className="bg-blue-900 text-white p-8 mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Informe Semanal</h1>
        <p className="text-lg mb-4">Vigilância das Doenças Imunopreviniáveis - Meningite</p>
        <p className="text-sm mb-6">SE 01 a SE 13 (05/01/2026 a 04/04/2026)</p>

      </div>

      <div className="container mx-auto px-4 pb-12">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-2 cursor-pointer">
            <p className="text-gray-600 text-sm font-semibold mb-2">Total Notificados</p>
            <p className="text-3xl font-bold text-blue-900">62</p>
            <p className="text-green-600 text-xs mt-2">↑ +7 vs período anterior</p>
          </div>
          <div className="bg-red-50 rounded-lg p-6 shadow-sm border border-red-200 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-2 cursor-pointer">
            <p className="text-red-900 text-sm font-semibold mb-2">Bacterianas</p>
            <p className="text-3xl font-bold text-red-600">15 (83%)</p>
            <p className="text-red-600 text-xs mt-2">↑ +2 vs período anterior</p>
          </div>
          <div className="bg-green-50 rounded-lg p-6 shadow-sm border border-green-200 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-2 cursor-pointer">
            <p className="text-green-900 text-sm font-semibold mb-2">Outras Etiologias</p>
            <p className="text-3xl font-bold text-green-600">1 (6%)</p>
            <p className="text-red-600 text-xs mt-2">↓ -1 vs período anterior</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 shadow-sm border border-purple-200 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-2 cursor-pointer">
            <p className="text-purple-900 text-sm font-semibold mb-2">Viral</p>
            <p className="text-3xl font-bold text-purple-600">2 (11%)</p>
            <p className="text-green-600 text-xs mt-2">↑ +1 vs período anterior</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-6 shadow-sm border border-orange-200 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-2 cursor-pointer">
            <p className="text-orange-900 text-sm font-semibold mb-2">Taxa de Mortalidade</p>
            <p className="text-3xl font-bold text-orange-600">11,1%</p>
            <p className="text-gray-600 text-xs mt-2">2 óbitos / 18 confirmados</p>
          </div>
        </div>

        {/* Status dos Casos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-6 shadow-sm border border-blue-200 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-2 cursor-pointer">
            <p className="text-blue-900 text-sm font-semibold mb-2">Confirmados</p>
            <p className="text-3xl font-bold text-blue-600">18 (29%)</p>
            <p className="text-green-600 text-xs mt-2">↑ +2 vs período anterior</p>
          </div>
          <div className="bg-green-50 rounded-lg p-6 shadow-sm border border-green-200 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-2 cursor-pointer">
            <p className="text-green-900 text-sm font-semibold mb-2">Descartados</p>
            <p className="text-3xl font-bold text-green-600">18 (29%)</p>
            <p className="text-green-600 text-xs mt-2">↑ +1 vs período anterior</p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-6 shadow-sm border border-yellow-200 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-2 cursor-pointer">
            <p className="text-yellow-900 text-sm font-semibold mb-2">Em Investigação</p>
            <p className="text-3xl font-bold text-yellow-600">26 (42%)</p>
            <p className="text-green-600 text-xs mt-2">↑ +6 vs período anterior</p>
          </div>
        </div>

        {/* Análise Geral do Informe */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Análise Geral do Informe</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            No período de 05/01/2026 a 04/04/2026 (SE 01 a SE 13), foram registrados <strong>62 casos notificados</strong> de meningite, com <strong>18 confirmados (29%)</strong>, <strong>18 descartados (29%)</strong> e <strong>26 em investigação (42%)</strong>. As meningites bacterianas representam a maioria dos casos (83%), com destaque para a Meningite Não Especificada (80% dos casos bacterianos). A taxa de mortalidade foi de 11,1% (2 óbitos entre 18 confirmados). A distribuição geográfica concentra-se na região metropolitana (10 casos), com presença em 8 regionais diferentes. A evolução temporal mostra tendência de aumento de notificações em março de 2026.
          </p>
        </div>

        {/* Distribuição Demográfica */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Distribuição Demográfica</h2>
          
          {/* Filtro de Faixa Etária */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <label className="text-sm font-semibold text-gray-700 block mb-3">Filtrar por Faixa Etária:</label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setAgeGroup("all")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  ageGroup === "all"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Todas as Idades
              </button>
              <button
                onClick={() => setAgeGroup("0-1")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  ageGroup === "0-1"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                0 a 1 ano
              </button>
              <button
                onClick={() => setAgeGroup("1-10")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  ageGroup === "1-10"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                1 a 10 anos
              </button>
              <button
                onClick={() => setAgeGroup("11-20")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  ageGroup === "11-20"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                11 a 20 anos
              </button>
              <button
                onClick={() => setAgeGroup("21-30")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  ageGroup === "21-30"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                21 a 30 anos
              </button>
              <button
                onClick={() => setAgeGroup("41-50")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  ageGroup === "41-50"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                41 a 50 anos
              </button>
              <button
                onClick={() => setAgeGroup("51-60")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  ageGroup === "51-60"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                51 a 60 anos
              </button>
              <button
                onClick={() => setAgeGroup("61-70")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  ageGroup === "61-70"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                61 a 70 anos
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Por Sexo</h3>
              <DemographicSexChart ageGroup={ageGroup} />
              <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: "#EEF6FE" }}>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Análise:</strong> Leve predominância masculina (55,6% vs 44,4%). Distribuição equilibrada, consistente com o perfil epidemiológico da doença.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Por Raça/Cor</h3>
              <DemographicRaceChart ageGroup={ageGroup} />
              <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: "#FFFBEC" }}>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Análise:</strong> Expressiva predominância de indivíduos pardos (88,9%), refletindo o perfil étnico-racial da população maranhense.
                </p>
              </div>
            </div>
          </div>
          
          {/* Gráfico de Colunas por Faixa Etária */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Casos Confirmados por Faixa Etária</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={[
                { name: "0 a 1 ano", value: 6 },
                { name: "1 a 10 anos", value: 2 },
                { name: "11 a 20 anos", value: 3 },
                { name: "21 a 30 anos", value: 1 },
                { name: "41 a 50 anos", value: 3 },
                { name: "51 a 60 anos", value: 1 },
                { name: "61 a 70 anos", value: 1 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#ef4444" radius={[8, 8, 0, 0]} label={{ position: "top", fill: "#1f2937", fontWeight: "bold" }} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Critérios de Confirmação */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Critérios de Confirmação</h2>
          <ConfirmationCriteriaChart />
          <p className="text-gray-600 text-sm mt-6">
            <strong>Análise:</strong> O Quimiocitológico é o critério mais utilizado (8 casos - 44,4%), seguido pelo Clínico (4 casos - 22,2%) e Cultura (3 casos - 16,7%). Estes dados refletem as práticas diagnósticas adotadas para confirmação de casos de meningite na região, com predominância de métodos laboratoriais.
          </p>
        </div>

        {/* Casos por Mês */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Casos Notificados e Confirmados por Mês</h2>
          <CasesByMonthChart />
          <p className="text-gray-600 text-sm mt-6">
            <strong>Análise:</strong> Janeiro apresentou o maior número de notificações (24 casos) e confirmações (11 casos), representando 39% do total de notificações do período. Fevereiro registrou 21 notificações com apenas 4 confirmações, sugerindo aumento de casos suspeitos. Março mostrou redução em notificações (17 casos) com apenas 3 confirmações, indicando possível controle da situação epidemiológica.
          </p>
        </div>

        {/* Meningites Bacterianas */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Meningites Bacterianas</h2>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribuição por tipo de meningite bacteriana</h3>
          
          {/* Grid com Gráfico à esquerda e Resumo à direita */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            {/* Gráfico de Pizza à esquerda */}
            <div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={[
                      { name: "MNE", value: 12, percentage: 80 },
                      { name: "MM", value: 1, percentage: 7 },
                      { name: "MM+MCC", value: 1, percentage: 7 },
                      { name: "MB", value: 1, percentage: 7 },
                    ]}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name }) => name}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {[
                      { name: "MNE", value: 12, percentage: 80 },
                      { name: "MM", value: 1, percentage: 7 },
                      { name: "MM+MCC", value: 1, percentage: 7 },
                      { name: "MB", value: 1, percentage: 7 },
                    ].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={["#ef4444", "#f97316", "#eab308", "#8b5cf6"][index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            {/* Resumo à direita */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Resumo</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                  <span className="text-gray-700">MNE</span>
                  <span className="text-lg font-bold text-red-600">12 (80%)</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                  <span className="text-gray-700">MM</span>
                  <span className="text-lg font-bold text-orange-600">1 (7%)</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                  <span className="text-gray-700">MM+MCC</span>
                  <span className="text-lg font-bold text-yellow-600">1 (7%)</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                  <span className="text-gray-700">MB</span>
                  <span className="text-lg font-bold text-purple-600">1 (7%)</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Análise abaixo */}
          <p className="text-gray-600 text-sm">
            <strong>Análise:</strong> A Meningite Não Especificada (MNE) é predominante com 12 casos (80% dos casos bacterianos confirmados), seguida por Meningite Meningocócica (MM) e Meningite Meningocócica + Meningococcemia (MM+MCC) com 1 caso cada (7%), e Meningite por outras Bactérias (MB) com 1 caso (7%).
          </p>
        </div>

        {/* Evolução das Bacterianas */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Evolução das Bacterianas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Resumo</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <span className="text-gray-700">Altas</span>
                  <span className="text-2xl font-bold text-green-600">29 (47%)</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                  <span className="text-gray-700">Óbitos</span>
                  <span className="text-2xl font-bold text-red-600">2 (3%)</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                  <span className="text-gray-700">Internação</span>
                  <span className="text-2xl font-bold text-orange-600">9 (15%)</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                  <span className="text-gray-700">Em Investigação</span>
                  <span className="text-2xl font-bold text-yellow-600">22 (35%)</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong>Análise:</strong> Entre os casos bacterianos confirmados, 8 evoluíram para alta (53%), 2 para óbito (13%) e 5 permaneceram em internação (33%). A taxa de alta hospitalar (53%) indica resposta positiva ao tratamento, enquanto a taxa de mortalidade de 13% entre os casos bacterianos reforça a gravidade desta etiologia.
              </p>
            </div>
          </div>
        </div>

        {/* Distribuição Geográfica */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Distribuição de Casos Confirmados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Por Regionais</h3>
              <div className="space-y-3">
                {[
                  { name: "Metropolitana", value: 10, percentage: 50 },
                  { name: "Bacabal", value: 2, percentage: 10 },
                  { name: "Rosário", value: 1, percentage: 5 },
                  { name: "Viana", value: 1, percentage: 5 },
                  { name: "Imperatriz", value: 1, percentage: 5 },
                  { name: "Itapecuru", value: 1, percentage: 5 },
                  { name: "Zé Doca", value: 1, percentage: 5 },
                  { name: "Caxias", value: 1, percentage: 5 },
                ].map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">{item.name}</span>
                      <span className="text-gray-700">{item.value} ({item.percentage}%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Por Macrorregiões</h3>
              <div className="space-y-3">
                {[
                  { name: "Macrorregião Norte", percentage: 89 },
                  { name: "Macrorregião Sul", percentage: 6 },
                  { name: "Macrorregião Leste", percentage: 6 },
                ].map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">{item.name}</span>
                      <span className="text-gray-700">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-6">
            <strong>Análise Regional:</strong> A Metropolitana concentra 56% dos casos confirmados (10 casos), seguida por Bacabal com 11% (2 casos). As demais regionais apresentam 1 caso cada, totalizando 33%. A Macroregião Norte é responsável por 89% dos casos (16 casos), indicando concentração da doença nesta região, enquanto Macroregião Sul e Macroregião Leste apresentam apenas 1 caso cada (6%).
          </p>
        </div>

        {/* Por Município de Residência */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Distribuição de Casos Confirmados por Município de Residência</h2>
          <div className="space-y-3">
            {[
              { name: "São luís", value: 9, percentage: 50 },
              { name: "Viana", value: 1, percentage: 5.6 },
              { name: "São luiz gonzaga do maranhão", value: 1, percentage: 5.6 },
              { name: "Bacabal", value: 1, percentage: 5.6 },
              { name: "São josé de ribamar", value: 1, percentage: 5.6 },
              { name: "Bacabeira", value: 1, percentage: 5.6 },
              { name: "Urbano santos", value: 1, percentage: 5.6 },
              { name: "Caxias", value: 1, percentage: 5.6 },
              { name: "Amarante", value: 1, percentage: 5.6 },
              { name: "Nova olinda do maranhão", value: 1, percentage: 5.6 },
            ].map((item) => (
              <div key={item.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">{item.name}</span>
                  <span className="text-gray-700">{item.value} ({item.percentage}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-red-600 h-3 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mapa de Calor Geográfico */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Mapa de Calor - Distribuição Geográfica de Casos Confirmados</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Metropolitana", value: 10, max: 10 },
              { name: "Bacabal", value: 2, max: 10 },
              { name: "Rosário", value: 1, max: 10 },
              { name: "Viana", value: 1, max: 10 },
              { name: "Imperatriz", value: 1, max: 10 },
              { name: "Itapecuru", value: 1, max: 10 },
              { name: "Zé Doca", value: 1, max: 10 },
              { name: "Caxias", value: 1, max: 10 },
            ].filter((region) => region.value > 0).map((region) => {
              let bgColor, textColor;
              if (region.name === 'Metropolitana') {
                bgColor = 'bg-red-600';
                textColor = 'text-white';
              } else if (region.value > 0) {
                bgColor = 'bg-orange-200';
                textColor = 'text-gray-900';
              } else {
                bgColor = 'bg-gray-100';
                textColor = 'text-gray-900';
              }
              
              return (
                <div
                  key={region.name}
                  className={`p-4 rounded-lg ${bgColor} ${textColor} text-center transition-all hover:shadow-lg cursor-pointer`}
                  title={`${region.name}: ${region.value} casos confirmados`}
                >
                  <p className="font-semibold text-sm">{region.name}</p>
                  <p className="text-2xl font-bold mt-2">{region.value}</p>
                  <p className="text-xs mt-1 opacity-80">{((region.value / 18) * 100).toFixed(1)}%</p>
                </div>
              );
            })}
          </div>
          <p className="text-gray-600 text-sm mt-6">
            <strong>Legenda:</strong> O mapa de calor mostra a intensidade de casos confirmados por regional. Vermelho indica a maior concentração (Metropolitana com 10 casos - 55,6%), laranja claro indica outras regiões com casos confirmados. Bacabal apresenta 2 casos (11,1%), enquanto Rosário, Viana, Imperatriz, Itapecuru, Zé Doca e Caxias apresentam 1 caso cada (5,6% cada).
          </p>
        </div>

        {/* Casos Pendentes */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Casos Pendentes por Regionais</h2>
          <div className="space-y-3">
            {[
              { name: "Metropolitana", value: 12 },
              { name: "Santa Inês", value: 3 },
              { name: "Rosário", value: 3 },
              { name: "Viana", value: 2 },
              { name: "Bacabal", value: 2 },
              { name: "Imperatriz", value: 1 },
              { name: "Presidente Dutra", value: 1 },
              { name: "Balsas", value: 1 },
              { name: "Pedreiras", value: 1 },
            ].map((item) => (
              <div key={item.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">{item.name}</span>
                  <span className="text-gray-700">{item.value}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: `${(item.value / 12) * 100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm mt-6">
            <strong>Análise:</strong> A Metropolitana lidera com 12 notificações (19% do total), seguida por Santa Inês, Rosário e Viana com 3, 3 e 2 notificações respectivamente. As demais regionais apresentam 1 notificação cada, indicando distribuição geograficamente dispersa dos casos suspeitos.
          </p>
        </div>

        {/* Situação dos Casos */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Situação dos Casos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Status Geral</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <span className="text-gray-700">Encerrados</span>
                  <span className="text-2xl font-bold text-green-600">34 (55%)</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                  <span className="text-gray-700">Em Aberto</span>
                  <span className="text-2xl font-bold text-blue-600">28 (45%)</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Casos Encerrados</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <span className="text-gray-700">Altas</span>
                  <span className="text-2xl font-bold text-green-600">29 (85%)</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                  <span className="text-gray-700">Óbitos</span>
                  <span className="text-2xl font-bold text-red-600">5 (15%)</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            <strong>Análise:</strong> Do total de 62 notificações, 34 casos (55%) foram encerrados e 28 (45%) permanecem em aberto. Entre os encerrados, 29 evoluíram para alta (85%) e 5 para óbito (15%), demonstrando elevada taxa de resolução dos casos.
          </p>
        </div>

        {/* Filtro por Semana Epidemiológica */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Filtrar por Semana Epidemiológica - Evolução Semanal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Semana Inicial</label>
              <select
                value={startWeek}
                onChange={(e) => setStartWeek(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {Array.from({ length: 13 }, (_, i) => (
                  <option key={i + 1} value={String(i + 1)}>
                    SE {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Semana Final</label>
              <select
                value={endWeek}
                onChange={(e) => setEndWeek(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {Array.from({ length: 13 }, (_, i) => (
                  <option key={i + 1} value={String(i + 1)}>
                    SE {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div key={`${startWeek}-${endWeek}`} className="chart-container animate-fade-in">
            <WeeklyEpidemicChart startWeek={startWeek} endWeek={endWeek} />
          </div>
          {(() => {
            const allData = [
              { semana: "SEM-1", confirmados2025: 2, notificados2026: 2, confirmados2026: 0 },
              { semana: "SEM-2", confirmados2025: 0, notificados2026: 7, confirmados2026: 2 },
              { semana: "SEM-3", confirmados2025: 5, notificados2026: 7, confirmados2026: 4 },
              { semana: "SEM-4", confirmados2025: 1, notificados2026: 4, confirmados2026: 3 },
              { semana: "SEM-5", confirmados2025: 2, notificados2026: 6, confirmados2026: 2 },
              { semana: "SEM-6", confirmados2025: 5, notificados2026: 5, confirmados2026: 0 },
              { semana: "SEM-7", confirmados2025: 1, notificados2026: 4, confirmados2026: 0 },
              { semana: "SEM-8", confirmados2025: 0, notificados2026: 7, confirmados2026: 2 },
              { semana: "SEM-9", confirmados2025: 5, notificados2026: 5, confirmados2026: 1 },
              { semana: "SEM-10", confirmados2025: 2, notificados2026: 4, confirmados2026: 0 },
              { semana: "SEM-11", confirmados2025: 4, notificados2026: 5, confirmados2026: 1 },
              { semana: "SEM-12", confirmados2025: 3, notificados2026: 3, confirmados2026: 1 },
              { semana: "SEM-13", confirmados2025: 2, notificados2026: 3, confirmados2026: 1 },
            ];
            const startIndex = parseInt(startWeek) - 1;
            const endIndex = parseInt(endWeek);
            const filteredData = allData.slice(startIndex, endIndex);
            const totalNotificados = filteredData.reduce((sum, d) => sum + d.notificados2026, 0);
            const totalConfirmados = filteredData.reduce((sum, d) => sum + d.confirmados2026, 0);
            const taxaConfirmacao = totalNotificados > 0 ? ((totalConfirmados / totalNotificados) * 100).toFixed(1) : 0;

            return (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6 rounded">
                <p className="text-gray-700 text-sm">
                  <strong>Período Selecionado (SE {startWeek} a SE {endWeek}):</strong> Total de <strong>{totalNotificados} casos notificados</strong> em 2026 e <strong style={{ color: '#dc2626' }}>{totalConfirmados} casos confirmados</strong>. A taxa de confirmação no período é de <strong>{taxaConfirmacao}%</strong>, indicando a efetividade dos critérios diagnósticos utilizados. A análise semanal revela flutuações nas notificações, sugerindo períodos de maior transmissão ou detecção de casos.
                </p>
              </div>
            );
          })()}
        </div>

        {/* Glossário */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Glossário de Siglas Epidemiológicas</h2>
          <p className="text-gray-600 text-sm mb-6">Definições de termos e siglas utilizadas no dashboard</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-red-50 to-red-100 border-l-4 border-red-500 p-4 rounded-lg transition-all hover:shadow-lg hover:scale-105 cursor-pointer">
              <h4 className="text-lg font-semibold text-red-900 mb-2">MNE</h4>
              <p className="text-red-800 text-sm">Meningite Não Especificada - Meningite bacteriana sem identificação específica do agente etiológico</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-l-4 border-orange-500 p-4 rounded-lg transition-all hover:shadow-lg hover:scale-105 cursor-pointer">
              <h4 className="text-lg font-semibold text-orange-900 mb-2">MB</h4>
              <p className="text-orange-800 text-sm">Meningite por outras Bactérias - Meningite causada por bactérias diferentes de Neisseria meningitidis (bactéria diplococo gram-negativa que causa doenças graves, como a meningococcemia)</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-500 p-4 rounded-lg transition-all hover:shadow-lg hover:scale-105 cursor-pointer">
              <h4 className="text-lg font-semibold text-purple-900 mb-2">MM</h4>
              <p className="text-purple-800 text-sm">Meningite Meningocócica - Meningite causada por Neisseria meningitidis</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500 p-4 rounded-lg transition-all hover:shadow-lg hover:scale-105 cursor-pointer">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">MM+MCC</h4>
              <p className="text-blue-800 text-sm">Meningite Meningocócica + Meningococcemia - Meningite meningocócica com presença de meningococcemia</p>
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <div className="bg-gray-100 rounded-lg p-6 text-center text-gray-600 text-sm">
          <p className="font-semibold mb-2">Dashboard de Vigilância Epidemiológica - Meningite 2026</p>
          <p className="mt-2">Fonte: SINAN/SES/MA - <strong>Raimundo Expedito - RT pelo monitoramento das meningites</strong> / SES-MA</p>
        </div>
      </div>
    </div>
  );
}
