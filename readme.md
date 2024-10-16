# Middle frontend education
## Learn how to configure Webpack and study its work featuress

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
- Folder Templates (by Huuums)
- ESLint
- Stylelint
- i18n Ally (optional)

vsCode settings.json: 

```
{
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