/**
 * Site footer
 */
export const Footer = () => {
  return (
    <div className="min-h-0 py-5 px-1 mb-11 lg:mb-0">
      <div></div>
      <div className="w-full">
        <ul className="menu menu-horizontal w-full">
          <div className="flex justify-center items-center gap-2 text-sm w-full">
            <div className="text-center">
              <a
                href="https://github.com/Inkvisto/blockchain_course"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                Fork me
              </a>
            </div>
            <span>·</span>
            <div className="flex justify-center items-center gap-2">
              <p className="m-0 text-center">Built by</p>
              <a className="flex justify-center items-center gap-1" href="https://github.com/Inkvisto" target="_blank" rel="noreferrer">
                <span>Inkvisto</span>
              </a>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};
