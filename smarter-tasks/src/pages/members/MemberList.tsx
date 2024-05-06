import { useEffect, } from 'react';
import { fetchMembers } from "../../context/members/actions";
import { useMembersDispatch } from "../../context/members/context";
import MemberListItems from './MemberListItems';


const MemberList = () => {

    const dispatchMembers = useMembersDispatch();

    // const [Members, setMembers] = useState<Member[]>([]);
    // const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        // Fetch the list of Members here
        fetchMembers(dispatchMembers)
    }, []);

    return (
        <div className='flex flex-wrap gap-5 mt-5'>
            <MemberListItems />
        </div>
    );
};
export default MemberList;