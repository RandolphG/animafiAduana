export const DashboardPageViewModel = () => {
  const payments = [
    {
      color: "green",
      date: "01/22",
      cardNumber: ".... 4012",
      title: "Internet",
      amount: "$2,110",
    },
    {
      color: "olive",
      date: "12/23",
      cardNumber: ".... 2228",
      title: "Universal",
      amount: "$5,610",
    },
    {
      color: "gray",
      date: "03/22",
      cardNumber: ".... 5214",
      title: "Internet",
      amount: "$3,473",
    },
  ];

  const sideNavigationLinks = [
    {
      name: "Dashboard",
      link: "#",
      className: "browsers",
    },
    {
      name: "Schedule",
      link: "#",
      className: "check-square",
    },
    {
      name: "Transfers",
      link: "#",
      className: "swap",
    },
    {
      name: "Templates",
      link: "#",
      className: "file-text",
    },
    {
      name: "SWIFT",
      link: "#",
      className: "globe",
    },
    {
      name: "Exchange",
      link: "#",
      className: "clipboard-text",
    },
  ];

  return {
    payments,
    sideNavigationLinks,
  };
};
