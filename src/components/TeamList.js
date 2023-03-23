import Team from "./Team";

const TeamList = () => {
  return (
    <Team
      teamName="Awesome Team"
      teamMembers={[
        {
          name: "John Doe",
          role: "Developer",
          profilePicture:
            "https://images.unsplash.com/photo-1670272506253-3a185e06d102?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
          contactInfo: "john.doe@example.com",
          status: "Active",
        },
        {
          name: "Jane Smith",
          role: "Designer",
          profilePicture: "https://example.com/jane-smith.jpg",
          contactInfo: "jane.smith@example.com",
          status: "Inactive",
        },
        {
          name: "Bob Johnson",
          role: "Project Manager",
          profilePicture: "https://example.com/bob-johnson.jpg",
          contactInfo: "bob.johnson@example.com",
          status: "Active",
        },
      ]}
    />
  );
};

export default TeamList;
