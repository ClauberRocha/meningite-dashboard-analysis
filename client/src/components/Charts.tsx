import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  ScatterChart,
  Scatter,
} from "recharts";
import { Users, UserCheck } from "lucide-react";
import { useState } from "react";

// Gráfico de Pizza - Distribuição Demográfica por Sexo
export function DemographicSexChart({ ageGroup = "all" }: { ageGroup?: string }) {
  const ageGroupData: Record<string, any[]> = {
    all: [
      { name: "Masculino", value: 10, percentage: 55.6 },
      { name: "Feminino", value: 8, percentage: 44.4 },
    ],
    "0-1": [
      { name: "Masculino", value: 4, percentage: 66.7 },
      { name: "Feminino", value: 2, percentage: 33.3 },
    ],
    "1-10": [
      { name: "Masculino", value: 2, percentage: 66.7 },
      { name: "Feminino", value: 1, percentage: 33.3 },
    ],
    "11-20": [
      { name: "Masculino", value: 2, percentage: 66.7 },
      { name: "Feminino", value: 1, percentage: 33.3 },
    ],
    "21-30": [
      { name: "Masculino", value: 3, percentage: 60 },
      { name: "Feminino", value: 2, percentage: 40 },
    ],
    "41-50": [
      { name: "Masculino", value: 1, percentage: 50 },
      { name: "Feminino", value: 1, percentage: 50 },
    ],
    "51-60": [
      { name: "Masculino", value: 1, percentage: 100 },
      { name: "Feminino", value: 0, percentage: 0 },
    ],
  };
  
  const data = ageGroupData[ageGroup] || ageGroupData.all;

  const COLORS = ["#3b82f6", "#ec4899"];

  const CustomTooltip = (props: any) => {
    if (props.active && props.payload && props.payload.length) {
      const data = props.payload[0].payload;
      return (
        <div className="bg-white p-2 rounded shadow-lg border border-gray-300">
          <p className="text-sm font-semibold text-gray-900">{data.name}</p>
          <p className="text-sm text-gray-700">
            {data.value} casos ({data.percentage.toFixed(1)}%)
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center chart-container animate-slide-up">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percentage }) => `${name}: ${percentage.toFixed(1)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex gap-8 mt-6">
        <div className="flex items-center gap-2">
          <Users className="text-blue-600" size={24} />
          <div>
            <p className="text-sm font-semibold text-gray-900">Masculino</p>
            <p className="text-lg font-bold text-blue-600">{data[0].value} ({data[0].percentage.toFixed(1)}%)</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <UserCheck className="text-pink-500" size={24} />
          <div>
            <p className="text-sm font-semibold text-gray-900">Feminino</p>
            <p className="text-lg font-bold text-pink-500">{data[1]?.value || 0} ({data[1]?.percentage.toFixed(1) || 0}%)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Gráfico de Colunas - Distribuição Demográfica por Raça/Cor
export function DemographicRaceChart({ ageGroup = "all" }: { ageGroup?: string }) {
  const ageGroupData: Record<string, any[]> = {
    all: [
      { name: "Parda", value: 16, percentage: 88.9 },
      { name: "Branca", value: 1, percentage: 5.6 },
      { name: "Indígena", value: 1, percentage: 5.6 },
    ],
    "0-1": [
      { name: "Parda", value: 6, percentage: 100 },
      { name: "Branca", value: 0, percentage: 0 },
      { name: "Indígena", value: 0, percentage: 0 },
    ],
    "1-10": [
      { name: "Parda", value: 3, percentage: 100 },
      { name: "Branca", value: 0, percentage: 0 },
      { name: "Indígena", value: 0, percentage: 0 },
    ],
    "11-20": [
      { name: "Parda", value: 3, percentage: 100 },
      { name: "Branca", value: 0, percentage: 0 },
      { name: "Indígena", value: 0, percentage: 0 },
    ],
    "21-30": [
      { name: "Parda", value: 5, percentage: 100 },
      { name: "Branca", value: 0, percentage: 0 },
      { name: "Indígena", value: 0, percentage: 0 },
    ],
    "41-50": [
      { name: "Parda", value: 2, percentage: 100 },
      { name: "Branca", value: 0, percentage: 0 },
      { name: "Indígena", value: 0, percentage: 0 },
    ],
    "51-60": [
      { name: "Parda", value: 1, percentage: 100 },
      { name: "Branca", value: 0, percentage: 0 },
      { name: "Indígena", value: 0, percentage: 0 },
    ],
  };
  
  const data = ageGroupData[ageGroup] || ageGroupData.all;

  const CustomTooltip = (props: any) => {
    if (props.active && props.payload && props.payload.length) {
      const data = props.payload[0].payload;
      return (
        <div className="bg-white p-2 rounded shadow-lg border border-gray-300">
          <p className="text-sm font-semibold text-gray-900">{data.name}</p>
          <p className="text-sm text-gray-700">
            {data.value} casos ({data.percentage.toFixed(1)}%)
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center">
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} margin={{ top: 30, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="value" fill="#dc2626" radius={[8, 8, 0, 0]} label={{ position: "top" }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// Gráfico de Barras - Critérios de Confirmação
export function ConfirmationCriteriaChart() {
  const data = [
    { name: "Quimiocitológico", value: 8, percentage: 44.4 },
    { name: "Clínico", value: 4, percentage: 22.2 },
    { name: "Cultura", value: 3, percentage: 16.7 },
    { name: "PCR", value: 2, percentage: 11.1 },
    { name: "Necrópsia", value: 1, percentage: 5.6 },
  ];

  const CustomTooltip = (props: any) => {
    if (props.active && props.payload && props.payload.length) {
      const data = props.payload[0].payload;
      return (
        <div className="bg-white p-2 rounded shadow-lg border border-gray-300">
          <p className="text-sm font-semibold text-gray-900">{data.name}</p>
          <p className="text-sm text-gray-700">
            {data.value} casos ({data.percentage.toFixed(1)}%)
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 5, right: 30, left: 150, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" width={140} />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="value"
          fill="#ef4444"
          radius={[0, 8, 8, 0]}
          label={{ position: "right", offset: 10 }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

// Gráfico de Colunas - Casos por Mês
export function CasesByMonthChart() {
  const data = [
    { month: "Janeiro", notificados: 24, confirmados: 11 },
    { month: "Fevereiro", notificados: 21, confirmados: 4 },
    { month: "Março", notificados: 17, confirmados: 3 },
  ];

  const CustomTooltip = (props: any) => {
    if (props.active && props.payload && props.payload.length) {
      return (
        <div className="bg-white p-2 rounded shadow-lg border border-gray-300">
          <p className="text-sm font-semibold text-gray-900">
            {props.payload[0].payload.month}
          </p>
          {props.payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={380}>
      <BarChart data={data} margin={{ top: 30, right: 30, left: 0, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar
          dataKey="notificados"
          fill="#f97316"
          name="Notificados"
          radius={[8, 8, 0, 0]}
          label={{ position: "top" }}
        />
        <Bar
          dataKey="confirmados"
          fill="#ef4444"
          name="Confirmados"
          radius={[8, 8, 0, 0]}
          label={{ position: "top" }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

// Gráfico de Distribuição por Município
export function MunicipalityDistributionChart() {
  const data = [
    { name: "São Luís", value: 10, percentage: 55.6 },
    { name: "Bacabal", value: 2, percentage: 11.1 },
    { name: "Rosário", value: 1, percentage: 5.6 },
    { name: "Viana", value: 1, percentage: 5.6 },
    { name: "Imperatriz", value: 1, percentage: 5.6 },
    { name: "Outros", value: 2, percentage: 11.1 },
  ];

  const CustomTooltip = (props: any) => {
    if (props.active && props.payload && props.payload.length) {
      const data = props.payload[0].payload;
      return (
        <div className="bg-white p-2 rounded shadow-lg border border-gray-300">
          <p className="text-sm font-semibold text-gray-900">{data.name}</p>
          <p className="text-sm text-gray-700">
            {data.value} casos ({data.percentage.toFixed(1)}%)
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{ top: 30, right: 30, left: 0, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="value"
          fill="#dc2626"
          radius={[8, 8, 0, 0]}
          label={{ position: "top" }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

// Gráfico de Mapa de Calor por Região
export function HeatmapRegionalChart() {
  const data = [
    { name: "Metropolitana", value: 10, color: "#dc2626" },
    { name: "Bacabal", value: 2, color: "#fed7aa" },
    { name: "Rosário", value: 1, color: "#fed7aa" },
    { name: "Viana", value: 1, color: "#fed7aa" },
    { name: "Imperatriz", value: 1, color: "#fed7aa" },
  ];

  const CustomTooltip = (props: any) => {
    if (props.active && props.payload && props.payload.length) {
      const data = props.payload[0].payload;
      return (
        <div className="bg-white p-2 rounded shadow-lg border border-gray-300">
          <p className="text-sm font-semibold text-gray-900">{data.name}</p>
          <p className="text-sm text-gray-700">{data.value} casos confirmados</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-4">
      {data.map((region) => (
        <div key={region.name}>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-900">{region.name}</span>
            <span className="text-sm font-bold text-gray-700">{region.value} casos</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{ width: `${(region.value / 10) * 100}%`, backgroundColor: region.color }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// Função auxiliar para calcular dados do período selecionado
export function calculatePeriodStats(startWeek: string, endWeek: string) {
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

  const stats = {
    totalNotificados2026: filteredData.reduce((sum, d) => sum + d.notificados2026, 0),
    totalConfirmados2026: filteredData.reduce((sum, d) => sum + d.confirmados2026, 0),
    totalConfirmados2025: filteredData.reduce((sum, d) => sum + d.confirmados2025, 0),
    semanaInicial: `SEM-${startWeek}`,
    semanaFinal: `SEM-${endWeek}`,
  };

  return stats;
}

// Gráfico de Linhas - Filtro por Semana Epidemiológica


export function WeeklyEpidemicChart({ startWeek, endWeek }: { startWeek: string; endWeek: string }) {
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

  const CustomTooltip = (props: any) => {
    if (props.active && props.payload && props.payload.length) {
      return (
        <div className="bg-white p-2 rounded shadow-lg border border-gray-300">
          <p className="text-sm font-semibold text-gray-900">
            {props.payload[0].payload.semana}
          </p>
          {props.payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="chart-container animate-slide-up">
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={filteredData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="semana" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line
            type="monotone"
            dataKey="confirmados2025"
            stroke="#c084fc"
            strokeWidth={2}
            name="Confirmados 2025"
            dot={{ fill: "#c084fc", r: 4 }}
            label={{ position: "top", fill: "#c084fc", fontWeight: "bold", offset: 5 }}
          />
          <Line
            type="monotone"
            dataKey="notificados2026"
            stroke="#f97316"
            strokeWidth={2}
            name="Notificados 2026"
            dot={{ fill: "#f97316", r: 4 }}
            label={{ position: "top", fill: "#f97316", fontWeight: "bold", offset: 5 }}
          />
          <Line
            type="monotone"
            dataKey="confirmados2026"
            stroke="#dc2626"
            strokeWidth={3}
            name="Confirmados 2026"
            dot={{ fill: "#dc2626", r: 5 }}
            label={{ position: "top", fill: "#dc2626", fontWeight: "bold", offset: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
