import { RobotCard } from 'features/RobotCard';
import { CustomPagination } from 'features/CustomPagination';
import { GridForCards } from 'shared/ui/GridForCards';
import { cardSelector } from 'app/store/selectors/cardSelector';
import { useAppSelector } from 'app/store/hooks';

export const RobotCardsList = () => {
  const cards = useAppSelector(cardSelector);

  return (
    <>
      {cards.length > 0 && (
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
      )}
      <CustomPagination />
    </>
  );
};
