## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start:dev или npm run start:dev:vite - запуск сервера + frontend проекта в dev режиме
```

---

## Скрипты

-   `npm run start` - Запуск frontend проекта на webpack dev server
-   `npm run start:vite` - Запуск frontend проекта на vite
-   `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend
-   `npm run start:dev:vite` - Запуск frontend проекта на vite + backend
-   `npm run start:dev:server` - Запуск backend сервера
-   `npm run build:prod` - Сборка в prod режиме
-   `npm run build:dev` - Сборка в dev режиме (не минимизирован)
-   `npm run lint:ts` - Проверка ts файлов линтером
-   `npm run lint:ts:fix` - Исправление ts файлов линтером
-   `npm run lint:scss` - Проверка scss файлов style линтером
-   `npm run lint:scss:fix` - Исправление scss файлов style линтером
-   `npm run test:unit` - Хапуск unit тестов с jest
-   `npm run test:ui` - Хапуск скриншотных тестов с loki
-   `npm run test:ui:ok` - Подтверждение новых скриншотов
-   `npm run test:ui:ci` - Запуск скриншотных тестов в CI
-   `npm run test:ui:report` - Генерация полного отчета для скриншотных тестов
-   `npm run test:ui:json` - Генерация json отчета для скриншотных тестов
-   `npm run test:ui:html` - Генерация HTML отчета для скриншотных тестов
-   `npm run storybook` - запуск Storybook
-   `npm run storybook:build` - Сборка storybook билда
-   `npm run prepare` - прекоммит хуки
-   `npm run generate:slice` - Скрипт для генерации FSD слайсов

---

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Работа с переводами

В проекте используется библиотека i18next для работы с переводами.
Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендуем установить плагин для webstorm/vscode

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

---

## Тесты

В проекте используются 4 вида тестов:

1. Обычные unit тесты на jest - `npm run test:unit`
2. Тесты на компоненты с React testing library -`npm run test:unit`
3. Скриншотное тестирование с loki `npm run test:ui`
4. e2e тестирование с Cypress `npm run test:e2e`

Подробнее о тестах - [документация тестирование](/docs/tests.md)

---

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin _eslint-plugin-ulbi-tv-plugin_,
который содержит 3 правила

1. path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
2. layer-imports - проверяет корректность использования слоев с точки зрения FSD
   (например widgets нельзя использовать в features и entitites)
3. public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix

##### Запуск линтеров

-   `npm run lint:ts` - Проверка ts файлов линтером
-   `npm run lint:ts:fix` - Исправление ts файлов линтером
-   `npm run lint:scss` - Проверка scss файлов style линтером
-   `npm run lint:scss:fix` - Исправление scss файлов style линтером

---

## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:

-   `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```

---

## Конфигурация проекта

Для разработки проект содержит 2 конфига:

1. Webpack - ./config/build
2. vite - vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config

-   /config/babel - babel
-   /config/build - конфигурация webpack
-   /config/jest - конфигурация тестовой среды
-   /config/storybook - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

---

## CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

---

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

---

### Работа с feature-flags

Разрешено использование feature flags только с помощью хелпера toggleFeatures

в него передается объект с опциями

{
name: название фича-флага,
on: функция, которая отработает после Включения фичи
of: функция, которая отработает после ВЫключения фичи
}

Для автоматического удаления фичи использовать скрипт remove-feature.ts,
который принимает 2 аргумента

1. Название удаляемого фича-флага
2. Состояние (on\off)

---

## Сущности (entities)

-   [Article](/src/entities/Article)
-   [Comment](/src/entities/Comment)
-   [Counter](/src/entities/Counter)
-   [Country](/src/entities/Country)
-   [Currency](/src/entities/Currency)
-   [Notification](/src/entities/Notification)
-   [Profile](/src/entities/Profile)
-   [Rating](/src/entities/Rating)
-   [User](/src/entities/User)

## Фичи (features)

-   [addCommentForm](/src/features/addCommentForm)
-   [articleEditForm](/src/features/articleEditForm)
-   [articleRating](/src/features/articleRating)
-   [articleRecommendationsList](/src/features/articleRecommendationsList)
-   [AuthByUsername](/src/features/AuthByUsername)
-   [avatarDropdown](/src/features/avatarDropdown)
-   [editableProfileCard](/src/features/editableProfileCard)
-   [LangSwitcher](/src/features/LangSwitcher)
-   [notificationButton](/src/features/notificationButton)
-   [profileRating](/src/features/profileRating)
-   [ThemeSwitcher](/src/features/ThemeSwitcher)
-   [UI](/src/features/UI)

vsCode snippet:

```
{
	"Typescript React component": {
		"prefix": ["rc"],
		"body": [
			"import { classNames } from '@/shared/lib/classNames/classNames'",
			"import cls from './${TM_FILENAME_BASE}.module.scss'",
			"",
			"interface ${TM_FILENAME_BASE}Props {",
			"    className?: string",
			"}",
			"",
			"export const ${TM_FILENAME_BASE} = (props: ${TM_FILENAME_BASE}Props) => {",
            "    const { className } = props",
			"",
			"    return <div className={classNames(cls.${TM_FILENAME_BASE}, {}, [className])}>",
			"    </div>",
			"},"
		],
		"description": "Typescript FSD React component"
	},
	"Storybook React component": {
"prefix": ["sb"],
		"body": [
			"import { Theme } from '@/app/providers/theme';",
			"import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';",
			"import type { Meta, StoryObj } from '@storybook/react';",
			"import { ${TM_FILENAME_BASE/(.*?)\\..*/$1/} } from './${TM_FILENAME_BASE/(.*?)\\..*/$1/}';",
			"",
			"const meta = {",
			"   title: '$1/${TM_FILENAME_BASE/(.*?)\\..*/$1/}',",
			"   component: ${TM_FILENAME_BASE/(.*?)\\..*/$1/},",
			"   parameters: {",
			"      layout: '',",
			"   },",
			"   argTypes: {},",
			"   args: {},",
			"   } satisfies Meta<typeof ${TM_FILENAME_BASE/(.*?)\\..*/$1/}>;",
			"",
			"export default meta;",
			"type Story = StoryObj<typeof meta>;",
			"",
			"export const Primary: Story = {",
			"   args: {},",
			"};",
			"",
			"export const SecondaryDark: Story = {",
			"   args: {},",
			"   decorators: [ThemeDecorator(Theme.DARK)]",
			"};"

		],
		"description": "Typescript FSD React component"
	}
}


```

Required extention:

-   Folder Templates (by Huuums)
-   ESLint
-   Stylelint
-   i18n Ally (optional)

vsCode settings.json:

```
{
    "[typescript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "i18n-ally.localesPaths": [
        "public/locales",
        "src/shared/config/i18n"
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll": "explicit",
        "source.organizeImports": "explicit"
    },
    "eslint.validate": [
        "javascript"
    ],
    "i18n-ally.keystyle": "nested",
    "folderTemplates.fileTemplates": {
      "TypeScript React Component": [
        "import { useTranslation } from 'react-i18next';",
        "import { classNames } from '@/shared/lib/classNames/classNames';",
			  "import cls from './<FTName | capitalize>.module.scss';",
			  "",
			  "interface <FTName | capitalize>Props {",
			  "    className?: string",
			  "}",
			  "",
			  "export const <FTName | capitalize> = (props: <FTName | capitalize>Props) => {",
        "    const { className } = props;",
        "    const { t } = useTranslation();;",
			  "",
			  "    return <div className={classNames(cls.<FTName | capitalize>, {}, [className])}>",
			  "    </div>;",
			  "};"
      ],
      "Storybook React Component":[
        "import { Theme } from '@/app/providers/theme';",
        "import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';",
        "import type { Meta, StoryObj } from '@storybook/react';",
        "import { <FTName | capitalize> } from './<FTName | capitalize>;",
        "",
        "const meta = {",
        "   title: '<layerName | lowercase>/<FTName | capitalize>',",
        "   component: <FTName | capitalize>,",
        "   parameters: {",
        "      layout: '',",
        "   },",
        "   argTypes: {},",
        "   args: {},",
        "   } satisfies Meta<typeof <FTName | capitalize>>;",
        "",
        "export default meta;",
        "type Story = StoryObj<typeof meta>;",
        "",
        "export const Primary: Story = {",
        "   args: {},",
        "};",
        "",
        "export const SecondaryDark: Story = {",
        "   args: {},",
        "   decorators: [ThemeDecorator(Theme.DARK)]",
        "};"
      ],
      "SCSS Module React Component": [
        ".<FTName | capitalize> {}",
      ],
      "Tests React Component": [
        "import { render, screen } from '@testing-library/react';",
        "import { <FTName | capitalize> } from './<FTName | capitalize>';",
        "",
        "describe('<FTName | capitalize>', () => {",
        "    test('Test render', () => {",
        "        render(<<FTName | capitalize>>TEST</<FTName | capitalize>>);",
        "        expect(screen.getByText('TEST')).toBeInTheDocument();",
        "    });",
        "});"
      ],
      "Public API React Component": [
        "export { <FTName | capitalize> } from './ui/<FTName | capitalize>';",
      ]
    },
    "folderTemplates.structures": [
      {
        "name": "React Component Directory",
        "customVariables": ["layerName"],
        "structure": [
          {
            "fileName": "ui/<FTName | capitalize>.tsx",
            "template": "TypeScript React Component"
          },
          {
            "fileName": "ui/<FTName | capitalize>.stories.tsx",
            "template": "Storybook React Component"
          },
          {
            "fileName": "ui/<FTName | capitalize>.module.scss",
            "template": "SCSS Module React Component"
          },
          {
            "fileName": "ui/<FTName | capitalize>.test.tsx",
            "template": "Tests React Component"
          },
          {
            "fileName": "index.ts",
            "template": "Public API React Component"
          }
        ]
      },
    ]
  }
```
