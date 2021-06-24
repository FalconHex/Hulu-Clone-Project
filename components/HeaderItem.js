function HeaderItem({ Icon, title }) {
    return (
        <div className="flex flex-col items-center cursor-pointer group 
        w-12 sm:w-20 hover:text-white">
            <Icon className="h-8 mb-1 transition duration-100 transform group-hover:scale-125 " />
            <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
        </div>
    );
}

export default HeaderItem;
