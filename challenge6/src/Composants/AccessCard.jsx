function AccessCard() {
  const Access = [
    {
      image: "/images/icon-access-anywhere.svg",
      title: "Access your files, anywhere",
      description:
        "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
    },
    {
      image: "/images/icon-security.svg",
      title: "Security you can trust",
      description:
        "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
    },
    {
      image: "/images/icon-collaboration.svg",
      title: "Real-time collaboration",
      description:
        "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!"
    },
    {
      image: "/images/icon-any-file.svg",
      title: "Store any type of file",
      description:
        "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
    }
  ];

  return (
    <div className="w-full h-160 grid grid-cols-1 lg:grid-cols-2 px-25 pt-15 place-items-center ">
      {Access.map(({ image, title, description }) => (
        <div
          key={title}
          className="flex flex-col items-center text-neutral-white p-6 m-4 w-80"
        >
          <img src={image} alt={title} className="w-16 h-16 mb-2" />
          <h2 className="text-l font-bold mb-2">{title}</h2>
          <p className="text-center text-sm">{description}</p>
        </div>
      ))}
    </div>
  );
}

export default AccessCard;
