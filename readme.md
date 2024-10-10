# Middle frontend education
## Learn how to configure Webpack and study its work features

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

vsCode settings.json: 
```
{
    "i18n-ally.localesPaths": [
        "public/locales",
        "src/shared/config/i18n"
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll": "explicit"
    },
    "eslint.validate": ["javascript"]
}
```