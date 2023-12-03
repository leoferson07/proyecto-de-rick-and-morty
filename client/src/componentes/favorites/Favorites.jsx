
import { useSelector } from 'react-redux';
import Card from '../card/Card'

const Favorites =({ onClose }) => {
    const myFavorites = useSelector(state => state.myFavorites)
   return (
      <div style={{
         display:'flex ',
         flexWrap:'wrap',
         justifyContent:'space-evenly',
      }}>
         {
            myFavorites.map(character => (
               <Card
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin.name}
                  image={character.image}
                  onClose={onClose}
               />
            ))
         }
      </div>
   );
}

export default Favorites;