// import UserList from "@/app/components/UserList";
import React from "react";
import UserList from "../../src/app/components/UserList";
import { render, screen } from "@testing-library/react";
import { User } from "@/entities";

describe("UserList", () => {
  it("should render  when no one registered", () => {
    const users: User[] = [
      {id:1, name:'dev'},
      {id:2, name:'progrm'},
    ]
    users.forEach(user=> {
      // const link=screen.getAllByRole('link', { name: user.name })
      // expect(link).toBeInTheDocument()
      // expect(link).toHaveAttribute('href', `/users/${user.id}`)  /// commits error
})

      render(<UserList users={[]} />);
      screen.getByText('No users available') /// componentdagi text bilan bir xil bolishi shart...
      expect(screen.getByText(/no users/i)).toBeInTheDocument()


    });
});
