const Timeline = ({ subCategories }) => {
  console.log(subCategories);
  return (
    <div className='p-2'>
      <ol className="relative border-dotted border-l border-green-600 dark:border-gray-700">
        {subCategories?.map((item) => (
          <li key={item.id} className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <button className="text-xs text-gray-500 dark:text-white">{item.subcat_name_en}</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
