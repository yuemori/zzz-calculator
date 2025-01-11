import { Select } from "antd";
import { Agent, AgentLevel, CoreSkillLevel } from "@/types";
import { agents } from "@/data";
import { HelpButton } from "./HelpButton";
import { useTranslation } from "react-i18next";

export const AgentStatusPanel = ({
  agent,
  level,
  coreSkillLevel,
  onChange,
}: {
  agent: Agent;
  level: AgentLevel;
  coreSkillLevel: CoreSkillLevel;
  onChange: (
    agent: Agent,
    level: AgentLevel,
    coreSkillLevel: CoreSkillLevel
  ) => void;
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center bg-gray-700 rounded-md p-4 max-md:w-full lg:w-72">
      <div className="mb-4 w-full bg-gray-900 text-center rounded-md p-2 relative">
        {t("agent")}
        <div className="absolute right-2 top-0 h-full flex items-center">
          <HelpButton
            title={t("agent")}
            content={
              <div className="flex flex-col gap-1.5">
                <p>{t("components.AgentStatusPanel.help.0")}</p>
                <p>{t("components.AgentStatusPanel.help.1")}</p>
                <p>{t("components.AgentStatusPanel.help.2")}</p>
                <p className="font-bold">
                  {t("components.AgentStatusPanel.help.3")}
                </p>
              </div>
            }
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 w-full">
        <div className="flex flex-row items-center w-full gap-2">
          <div className="w-full">
            <Select
              className="lg:w-64 max-md:w-full"
              value={agents.indexOf(agent)}
              options={agents.map((agent, i) => ({
                value: i,
                // @ts-expect-error
                label: t(`data.agent.${agent.id}`),
              }))}
              onChange={(e) => {
                onChange(agents[e as number], level, coreSkillLevel);
              }}
            />
          </div>
        </div>

        <div className="flex flex-row items-center w-full gap-2">
          <div className="w-36">{t("components.AgentStatusPanel.level")}</div>
          <div className="grow">
            <Select
              className="w-32 max-md:w-full"
              value={level}
              options={[
                { value: 1, label: "1" },
                { value: 10, label: "10" },
                { value: 20, label: "20" },
                { value: 30, label: "30" },
                { value: 40, label: "40" },
                { value: 50, label: "50" },
                { value: 60, label: "60" },
              ]}
              onChange={(e) => {
                onChange(agent, e as AgentLevel, coreSkillLevel);
              }}
            />
          </div>
        </div>

        <div className="flex flex-row items-center w-full gap-2">
          <div className="w-36">
            {t("components.AgentStatusPanel.coreSkill")}
          </div>
          <div className="grow">
            <Select
              className="w-32 max-md:w-full"
              value={coreSkillLevel}
              options={[
                { value: 1, label: "None" },
                { value: 2, label: "A" },
                { value: 3, label: "B" },
                { value: 4, label: "C" },
                { value: 5, label: "D" },
                { value: 6, label: "E" },
                { value: 7, label: "F" },
              ]}
              onChange={(e) => {
                onChange(agent, level, e as CoreSkillLevel);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
