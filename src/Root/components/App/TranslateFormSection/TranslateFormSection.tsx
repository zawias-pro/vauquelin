import * as React from 'react'
import Radio from '@material-ui/core/Radio'
import Paper from '@material-ui/core/Paper'
import Switch from '@material-ui/core/Switch'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import {ChangeEvent} from "react";
import { Provider } from "../../../../types/Provider";

interface TranslateFormSectionProps {
    provider: Provider;
    providerOnChange: (event: ChangeEvent) => void;
    apiKey: string;
    apiKeyOnChange: (event: ChangeEvent) => void;
}

const TranslateFormSection: React.FunctionComponent<TranslateFormSectionProps> = ({
    provider,
    providerOnChange,
    apiKey,
    apiKeyOnChange
}) => (
    <Paper style={{padding: 16}}>
        <div style={{textAlign: 'center', marginBottom: 24}}>
            <Button variant="contained" color="primary">
                Translate
            </Button>
        </div>
        <FormControl>
            <FormLabel component="legend">Translation provider</FormLabel>
            <RadioGroup
                aria-label="Translation provider"
                value={provider}
                onChange={providerOnChange}
            >
                <FormControlLabel value="yandex" control={<Radio/>}
                                  label="Yandex"/>
                <FormControlLabel value="bing" control={<Radio/>} label="Bing"/>
                <FormControlLabel value="google" control={<Radio/>}
                                  label="Google"/>
            </RadioGroup>
            <FormControlLabel
                control={
                    <Switch
                        checked={false}
                        onChange={() => {
                        }}
                    />
                }
                label="Use custom API key"
            />
            <TextField
                label="Custom API key"
                fullWidth
                margin="normal"
                value={apiKey}
                onChange={apiKeyOnChange}
            />
        </FormControl>
    </Paper>
)

export { TranslateFormSection }
