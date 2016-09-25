import uuid
from typing import Dict, List


class SeqInstruction(object):
    def __init__(self, _id: int, code: str):
        self._id = _id
        self.code = code


class SeqBlock(object):
    def __init__(self, _id: int, name: str, instructions: List[SeqInstruction] = None):
        self._id = _id
        self.name = name
        self.instructions = instructions if instructions is not None else []


class SeqVersion(object):
    def __init__(self, name: str = "", desc: str = "", blocks: Dict[str, SeqBlock] = None):
        self.name = name
        self.desc = desc
        self.blocks = blocks if blocks is not None else {}


class Seq(object):
    def __init__(self, uid: str, versions: List[SeqVersion] = None):
        self.uid = uid
        self.versions = versions if versions is not None else []


class SeqMgr(object):
    def __init__(self):
        #  TODO init db
        pass

    def new_seq(self) -> Seq:
        uid = uuid.uuid4()
        #  TODO insert
        return Seq(uid=uid)

    def load_seq(self, uid: str) -> Seq:
        #  TODO load
        return Seq(uid=uid)

    def save_version(self, uid: str, version: SeqVersion):
        #  TODO insert
        pass
