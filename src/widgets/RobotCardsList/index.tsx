import { RobotCard } from 'features/RobotCard';
import { GridForCards } from 'shared/ui/GridForCards';
import { CustomPagination } from 'features/CustomPagination';

import { useAppSelector } from 'app/store/hooks';
import { cardSelector } from 'app/store/selectors/cardSelector';
import { generatedSettingsForPanelSelector } from 'app/store/selectors/generatedSettingsForPanelSelector';

export const RobotCardsList = () => {
  const generatedSettings = useAppSelector(generatedSettingsForPanelSelector);
  const cards = useAppSelector(cardSelector);

  return (
    <>
      {generatedSettings.generatedList?.length > 0 && (
        <>
          <GridForCards>
            {cards.map((itemList, index) => {
              return (
                <RobotCard
                  key={index}
                  image={itemList}
                />
              );
            })}
          </GridForCards>
          <CustomPagination />
        </>
      )}
    </>
  );
};
