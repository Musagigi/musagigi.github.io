import { useState } from 'react';

import { GridForCards } from 'shared/ui/GridForCards';
import { RobotCard } from 'features/RobotCard';
import { CustomPagination } from 'features/CustomPagination';

import { useLogout } from 'shared/hooks/useLogout';
import { isTokenLifetime } from 'shared/lib/utils/isTokenLifetime';
import { generatedSettingsForPanelSelector } from 'app/store/selectors/generatedSettingsForPanelSelector';
import { useAppSelector } from 'app/store/hooks';

// import { v4 as uuidv4 } from 'uuid'; uuidv4()

export const RobotCardsList = () => {
  const { generatedList } = useAppSelector(generatedSettingsForPanelSelector);

  const [cards, setCards] = useState<Array<string>>([]);

  const logout = useLogout();

  if (isTokenLifetime()) {
    logout();
  }

  return (
    <>
      {generatedList?.length > 0 && (
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
          <CustomPagination
            listItems={generatedList}
            setItems={setCards}
          />
        </>
      )}
    </>
  );
};
