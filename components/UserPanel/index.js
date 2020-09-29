import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';

const UserPanel = () => {
  return (
    <section>
      {/* <h2>Блок пользователя</h2> */}
      <img/>
      <p>Иванова Анна Михайловна</p>
      <IconButton>
        <CreateIcon/>
      </IconButton>
    </section>
  );
};

export default UserPanel;