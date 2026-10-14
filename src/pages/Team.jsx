import ProfileCard from "../components/ProfileCard";
import AddMemberForm from "../components/AddMemberForm";

function Team({ people, onAdd, onRemove }) {
  return (
    <>
      <h1 className="app-title">Our Team ({people.length})</h1>

      <section className="section">
        <h2 className="section-title">Add Team Member</h2>
        <AddMemberForm onAdd={onAdd} />
      </section>

      <div className="card-grid">
        {people.map((person) => (
          <ProfileCard
            key={person.id}
            id={person.id}
            name={person.name}
            city={person.city}
            hobby={person.hobby}
            onRemove={onRemove}
          />
        ))}
      </div>
    </>
  );
}

export default Team;