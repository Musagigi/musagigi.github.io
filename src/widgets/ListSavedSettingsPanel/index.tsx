import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { GridForCards } from 'shared/ui/GridForCards';
import { TitleForPage } from 'shared/ui/Text/TitleForPage';
import { CommonButton } from 'shared/ui/Buttons/CommonButton';
import { TwoSentences } from 'shared/ui/Text/TwoSentences';

import { getListSavedSettings } from 'shared/api/listSavedGeneratedSettingsForPanel/getListSavedSettings';
import { boxCard } from './styles';

export const ListSavedSettingsPanel = () => {
  const navigate = useNavigate();

  const listSaved = getListSavedSettings();

  return (
    <>
      <TitleForPage text="Сохраненные настройки панели" />
      {listSaved.length > 0 ? (
        <GridForCards>
          {listSaved.map((savedSetting, index: number) => {
            return (
              <Card
                key={index}
                variant="outlined"
                sx={boxCard}
              >
                <CardContent>
                  <TwoSentences
                    textOne="Список слов:"
                    textTwo={savedSetting.wordList
                      .map((item) => {
                        return item.text;
                      })
                      .join(' ')}
                  />

                  <TwoSentences
                    textOne="Тип комбинаторики:"
                    textTwo={savedSetting.combinatoricType}
                  />

                  <TwoSentences
                    textOne="Количество слов для комбинаторики:"
                    textTwo={savedSetting.countWordByCombinatoric}
                  />

                  <TwoSentences
                    textOne="Количество скомбинированных слов:"
                    textTwo={`${savedSetting.generatedList.length}`}
                  />
                </CardContent>
                <CardActions>
                  <CommonButton
                    size="small"
                    textForBtn="применить настройки"
                    onClick={() => navigate(`${index}`)}
                  />
                </CardActions>
              </Card>
            );
          })}
        </GridForCards>
      ) : (
        <Typography>Список сохраненных пуст</Typography>
      )}
    </>
  );
};
