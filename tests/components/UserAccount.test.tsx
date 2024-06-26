import React from "react";
import UserAccount from "../../src/app/components/UserAccount"; /// path ni @ bilan bersa xato beradi
import { User } from "@/entities";
import { render, screen } from "@testing-library/react";

describe("UserAccount", () => {

  it("should render user name", () => {
    const user: User = { id: 1, name: "developer" };
    render(<UserAccount user={user} />);
    expect(screen.getByText(user.name)).toBeInTheDocument()
  });
    
  it("should render edit button if user is admin", () => {
    const user: User = { id: 1, name: "developer", isAdmin:true };
      render(<UserAccount user={user} />);
      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
      expect(button).toHaveTextContent(/edit/i)

  });
    
    
});
