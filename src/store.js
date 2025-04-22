export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      },

    ],
    people: [

    ],
    planet: [],
    favorites: []  
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'update_people':
      return {
        ...store,
        people: action.payload
      }
    case 'update_planet':
      return {
        ...store,
        planet: action.payload
      }
      case 'toggle_favorite': {
        const item = action.payload;
        const exists = store.favorites.find(
          (fav) => fav.uid === item.uid && fav.type === item.type
        );
      
        return {
          ...store,
          favorites: exists
            ? store.favorites.filter(
                (fav) => !(fav.uid === item.uid && fav.type === item.type)
              )
            : [...store.favorites, item],
        };
      
      
    }

    default:
      throw Error('Unknown action.');
  }
}
