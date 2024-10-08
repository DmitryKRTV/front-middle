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